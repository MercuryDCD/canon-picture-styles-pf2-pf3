#!/usr/bin/env python3
"""
build_catalog.py
Genera los metadatos estructurados (presets_data.js) para el catálogo interactivo
de Canon Picture Styles a partir del archivo canónico CATALOGO_FUENTES_Y_HISTORIA.md
y el árbol de directorios de perfiles y LUTs binarios.
"""

import os
import re
import json
from pathlib import Path

REPO_DIR = Path(r"C:\Users\Dani\Pictures\presets Canon.pf3")
DOC_PATH = REPO_DIR / "CATALOGO_FUENTES_Y_HISTORIA.md"
OUTPUT_DATA_JS = REPO_DIR / "presets_data.js"

CATEGORY_COLORS = {
    "01_Fujifilm": {"bg": "rgba(16, 185, 129, 0.15)", "border": "#10b981", "badge": "#059669"},
    "02_Kodak": {"bg": "rgba(245, 158, 11, 0.15)", "border": "#f59e0b", "badge": "#d97706"},
    "03_Black_and_White": {"bg": "rgba(148, 163, 184, 0.15)", "border": "#94a3b8", "badge": "#64748b"},
    "04_Cinema_and_Log": {"bg": "rgba(56, 189, 248, 0.15)", "border": "#38bdf8", "badge": "#0284c7"},
    "05_Vintage_and_Instant": {"bg": "rgba(236, 72, 153, 0.15)", "border": "#ec4899", "badge": "#db2777"},
    "06_Portraits_and_Brands": {"bg": "rgba(168, 85, 247, 0.15)", "border": "#a855f7", "badge": "#9333ea"},
    "07_Creative_and_Artistic": {"bg": "rgba(234, 88, 12, 0.15)", "border": "#ea580c", "badge": "#c2410c"}
}

def clean_title(stem: str) -> str:
    # Formatea títulos para que sean legibles y estéticos
    title = stem.replace("_FilmSim", " (FilmSim)").replace("_", " ")
    title = re.sub(r"\s+", " ", title).strip()
    return title

def parse_catalog_markdown() -> dict:
    if not DOC_PATH.exists():
        print(f"[!] Warning: {DOC_PATH} no encontrado.")
        return {}

    meta = {}
    lines = DOC_PATH.read_text(encoding="utf-8").splitlines()
    for line in lines:
        parts = [p.strip() for p in line.split("|")]
        # Buscamos filas de tabla con nombre de archivo como primer campo
        if len(parts) >= 5 and "**`" in parts[1]:
            # Extraer filename limpio
            m = re.search(r"\*\*`([^`]+)`\*\*", parts[1])
            if not m:
                continue
            fn = m.group(1).strip()
            author = parts[2].replace("<br>", " ").strip()
            source = parts[3].replace("`", "").strip()
            profile_text = parts[4]

            look_m = re.search(r"\*\*Look:\*\*\s*(.*?)(?:<br>|$)", profile_text)
            best_m = re.search(r"\*\*Best for:\*\*\s*(.*?)(?:<br>|$)", profile_text)
            herit_m = re.search(r"\*\*Heritage:\*\*\s*(.*?)(?:<br>|$)", profile_text)

            meta[fn.lower()] = {
                "author": author,
                "source": source,
                "look": look_m.group(1).strip() if look_m else "",
                "bestFor": best_m.group(1).strip() if best_m else "",
                "heritage": herit_m.group(1).strip() if herit_m else ""
            }

    print(f"[+] Metadatos parseados desde markdown: {len(meta)} entradas.")
    return meta

def build_data():
    meta_dict = parse_catalog_markdown()

    categories = []
    presets = []

    cat_dirs = sorted([d for d in REPO_DIR.iterdir() if d.is_dir() and d.name[:2].isdigit()])

    for cat_dir in cat_dirs:
        cat_name = cat_dir.name
        cat_label = cat_name.split("_", 1)[1].replace("_", " ")
        cat_num = int(cat_name[:2])
        color_info = CATEGORY_COLORS.get(cat_name, {"bg": "rgba(255,255,255,0.1)", "border": "#64748b", "badge": "#475569"})

        # Presets en esta categoría
        preset_files = sorted(list(cat_dir.glob("*.pf3")) + list(cat_dir.glob("*.pf2")), key=lambda p: p.name.lower())
        cat_count = len(preset_files)

        categories.append({
            "id": cat_name,
            "label": cat_label,
            "num": cat_num,
            "count": cat_count,
            "color": color_info
        })

        for pf in preset_files:
            fn_lower = pf.name.lower()
            m = meta_dict.get(fn_lower, {})

            lut_rel = f"{cat_name}/luts_bin/{pf.stem}.bin"
            lut_exists = (REPO_DIR / lut_rel).exists()

            download_rel = f"{cat_name}/{pf.name}"

            # Sintetizar descripciones si no vinieran
            look = m.get("look") or f"Perfil de color {cat_label} calibrado para cámaras Canon EOS."
            best_for = m.get("bestFor") or "Fotografía general, viajes y retrato."
            heritage = m.get("heritage") or cat_label
            author = m.get("author") or "Canon EOS Community"

            presets.append({
                "id": f"{cat_name}__{pf.stem}",
                "name": clean_title(pf.stem),
                "filename": pf.name,
                "cat": cat_name,
                "catLabel": cat_label,
                "catNum": cat_num,
                "format": pf.suffix[1:].upper(),
                "lut": lut_rel,
                "lutReady": lut_exists,
                "download": download_rel,
                "look": look,
                "bestFor": best_for,
                "heritage": heritage,
                "author": author
            })

    # Fotos de muestra patrón (11 escenas)
    samples_dir = REPO_DIR / "samples"
    sample_items = [
        {"id": "scene_1", "name": "1. Retrato & Piel", "file": "samples/01_portrait_skin.jpg", "desc": "Tonos de piel y sombras suaves"},
        {"id": "scene_2", "name": "2. Retrato Contraste", "file": "samples/02_portrait_contrast.jpg", "desc": "Contraste facial y luces medias"},
        {"id": "scene_3", "name": "3. Retrato Exterior", "file": "samples/03_portrait_outdoor.jpg", "desc": "Luz solar directa y tonos naturales"},
        {"id": "scene_4", "name": "4. Paisaje & Cielo", "file": "samples/04_landscape_nature.jpg", "desc": "Cielos azules, agua y vegetación lejana"},
        {"id": "scene_5", "name": "5. Follaje & Naturaleza", "file": "samples/05_foliage_greens.jpg", "desc": "Verdes clorofila y saturación vegetal"},
        {"id": "scene_6", "name": "6. Arquitectura Urbana", "file": "samples/06_architecture_urban.jpg", "desc": "Líneas rectas, texturas y contraste medio"},
        {"id": "scene_7", "name": "7. Escena Street", "file": "samples/07_urban_street.jpg", "desc": "Contraste urbano y sombras densas"},
        {"id": "scene_8", "name": "8. Alto Rango Dinámico", "file": "samples/08_high_dynamic_range.jpg", "desc": "Transición de altas luces a sombras profundas"},
        {"id": "scene_9", "name": "9. Atardecer Golden Hour", "file": "samples/09_sunset_golden.jpg", "desc": "Tonos dorados y gradación cálida"},
        {"id": "scene_10", "name": "10. Interior & Ambiente", "file": "samples/10_indoor_ambient.jpg", "desc": "Luz artificial y sombras interiores"},
        {"id": "scene_11", "name": "11. Texturas & Detalle", "file": "samples/11_textures_detail.jpg", "desc": "Nitidez, microcontraste y definición fina"}
    ]

    # Validar muestras existentes
    valid_samples = []
    for s in sample_items:
        if (REPO_DIR / s["file"]).exists():
            valid_samples.append(s)

    # Serializar a presets_data.js
    js_content = f"""/**
 * Canon Picture Styles Suite - Base de Datos Indexada del Catálogo
 * Autogenerado por build_catalog.py. Total presets: {len(presets)}.
 */

window.CANON_CATEGORIES = {json.dumps(categories, ensure_ascii=False, indent=2)};

window.CANON_SAMPLES = {json.dumps(valid_samples, ensure_ascii=False, indent=2)};

window.CANON_PRESETS = {json.dumps(presets, ensure_ascii=False, indent=2)};
"""

    OUTPUT_DATA_JS.write_text(js_content, encoding="utf-8")
    print(f"[+] Archivo generado con éxito: {OUTPUT_DATA_JS} ({len(presets)} presets indexados, {len(categories)} categorías).")

if __name__ == "__main__":
    build_data()
