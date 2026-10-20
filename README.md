# Canon Picture Styles & 3D LUTs Library (.pf2 & .pf3)

[![Canon](https://img.shields.io/badge/Canon-EOS%20M%20%7C%20EOS%20R%20%7C%20DSLR-red.svg)](https://canon.com)
[![Presets](https://img.shields.io/badge/Presets-550%20Profiles-blue.svg)](.)
[![Formats](https://img.shields.io/badge/Formats-.pf2%20%7C%20.pf3%20%7C%20.bin%20%7C%20Hald%20PNG-success.svg)](.)
[![Live Demo](https://img.shields.io/badge/Demo-Interactive%20Web%20Catalog-brightgreen.svg)](https://mercurydcd.github.io/canon-picture-styles-pf2-pf3/)
[![License](https://img.shields.io/badge/License-Community%20%2F%20Free-orange.svg)](LICENSE)

A comprehensively curated, categorized, and standardized collection of **550 Picture Styles (`.pf2` & `.pf3`) and 3D LUTs** for Canon EOS cameras, Digital Photo Professional (DPP 4), and post-production suites.

This library consolidates community classics, discontinued Canon styles, iconic analog film simulations (**Fujifilm**, **Kodak**, **Ilford**, **Agfa**, **Polaroid**, **Rollei**), cinematic Log curves (**Technicolor CineStyle**, **Marvels Cine**, **Flaat**), and modern digital color profiles (**Fujifilm X-Trans III**, **Pixelmator Pro**, **PictureFX**), unified into **7 semantic macro-categories** based on photographic aesthetics.

---

## 🌐 Interactive Web Catalog & Triage Suite (`index.html`)

You can explore, filter, compare, and triage all **550 Picture Styles live in your browser** with zero external dependencies and 100% client-side GPU acceleration.

> 🚀 **[Try the Live Web Catalog on GitHub Pages](https://mercurydcd.github.io/canon-picture-styles-pf2-pf3/)**

The platform features two synchronized operational modes (toggle with `V` or the top-left switch):

### 1. 🗂️ Mosaico (550 Matrix Grid)
* **Instant Visual Matrix:** See all 550 profiles rendered in real time on any photograph using WebGL 2.0 trilinear 3D LUT interpolation ($< 0.2\text{ ms}$ per preset).
* **Visual Photo Selector:** Switch between pre-bundled curated scenes (Portrait, Landscape, Foliage Greens, Urban Architecture, High Dynamic Range) or drop your own photos.
* **Universal RAW & JPG Loader:** Drag & drop any **JPG, PNG, WebP**, or **Canon RAW (`.CR3` / `.CR2` / `.CRW`)** — embedded full-resolution previews are extracted in-client in $< 20\text{ ms}$.
* **Realtime Filtering:** Instant search by name, film emulsion, or creator (*"Velvia"*, *"Portra"*, *"Tri-X"*, *"CineStyle"*, *"Classic Chrome"*), category filtering, and ⭐ Favorites toggle.
* **A/B Split Curtain Modal:** Click any preset card to open full-screen inspection with an interactive 60 fps split curtain, detailed metadata sheet, and $0\dots 100\%$ intensity slider.
* **Direct File Downloads:** Download camera-ready `.pf3` or `.pf2` files directly from each card.

### 2. ⚡ Carrusel (Fast 1-by-1 Triage View)
A high-efficiency workflow designed for rapid criba and curating your personal presets:
* **Full-Screen Canvas:** Evaluates the active preset at maximum resolution on your chosen photograph.
* **Continuous Queue Loop:** Automatically filters out already saved or discarded styles so you only evaluate pending profiles.
* **Floating Metadata HUD:** Displays Tonal Profile (Look), Recommended Usage, Historical Emulsion Heritage, and Creator in an unobtrusive translucent panel.
* **Keyboard Hotkeys for Rapid Triage:**
  * `Space` or `B`: Instant Before / After toggle (Original JPG vs Preset applied).
  * `K` or `Enter` or `→`: **Keep (Mantener)** — Saves to favorites and advances to next pending.
  * `D` or `←`: **Discard (Descartar)** — Excludes from the loop and advances.
  * `S` or `↓`: **Skip (Saltar)** — Defers to the end of the loop without discarding.
  * `M`: **⭐ Real Favorite** — Marks as a top starred favorite.
  * `F`: **Encuadre (Fit)** — Toggles between full photo (*contain*) and edge-to-edge crop (*cover*).
  * `R`: **Restart Loop** — Recovers discarded/skipped presets to re-evaluate, preserving saved favorites.
  * `Backspace` or `↑`: Step back to the previous preset.
  * `V`: Switch between Matrix (Mosaico) and Carousel (Carrusel) mode.
* **Favorites & Discarded Drawer:** Slide-in management panel to review selections, copy slot assignments formatted for **Canon EOS Utility 3** (User Defined 1, 2, 3), and export your collection to JSON.

---

### Running Offline / Locally
If you clone or download this repository, double-click **`START_CATALOG.bat`** (or execute `python -m http.server 8080`) and visit:
```text
http://localhost:8080/index.html
```

---

## 📂 Intuitive Repository Structure (7 Macro-Categories)

Every category folder in this repository is designed to be self-contained and intuitive:
1. **Camera-Ready Styles (`.pf3` / `.pf2`):** Located directly in each category root for instant loading via Canon EOS Utility 3 or USB WPD.
2. **Digital 3D LUTs (`luts_bin/`):** $33^3$ hardware-accelerated binary matrices (107,811 bytes uint8 RGB) for GPU rendering, WebGL, and color grading engines.
3. **Original Assets (`source_luts/`):** Pristine source files (Hald CLUT PNGs Level 12 $1728 \times 1728$, `.cube` LUTs, etc.) preserving exact author colorimetry and metadata.

| Category | Profiles | Formats Included | Description & Iconic Looks |
| :--- | :---: | :---: | :--- |
| [**`01_Fujifilm`**](./01_Fujifilm) | 103 | `.pf2`, `.pf3`, `.bin`, Hald PNG | All Fuji simulations united: Provia, Velvia (50, 100, 100F), Astia, Classic Chrome, Superia (100–1600), Pro Neg (Hi/Std), Reala, Pro 160S/160C/400H/800Z, Fortia, Sensia, Natura 1600, X-Trans III sensor emulations. |
| [**`02_Kodak`**](./02_Kodak) | 58 | `.pf2`, `.pf3`, `.bin`, Hald PNG | All Kodak color films: Portra (160, 400, 800, NC, VC, UC), Kodachrome (25, 64, 200), Ektachrome (E100G, E100VS, E200, 64), Crowdak V3, Elite Chrome Extra Color, Royal Gold, Ultramax, Gold 100/200/400. |
| [**`03_Black_and_White`**](./03_Black_and_White) | 95 | `.pf2`, `.pf3`, `.bin`, Hald PNG | Complete monochrome catalog: Ilford (HP5 Plus, FP4, Delta 100/400/3200, Pan F Plus, XP2), Fuji Acros (Standard, +G, +R, +Ye) & Neopan, Kodak (Tri-X 320/400, T-Max 100/400/3200, Plus-X, Panatomic-X, BW400CN), Rollei (IR 400, Ortho 25, Retro), Polaroid 665/667/672, Agfa APX, ZilverFX (01–10, InfraRed), Sepia. |
| [**`04_Cinema_and_Log`**](./04_Cinema_and_Log) | 40 | `.pf2`, `.pf3`, `.bin` | Video & cinema grading: Technicolor CineStyle, Similaar Flaat (1–4 Maximum DR), Kodak 2393 Print Film, Marvels Cine (1.2, 2.1 Panalog, 3.3, 3.4), Panavision Genesis Panalog, Bleach Bypass, Teal & Orange, Futuristic Bleak, CandleLight. |
| [**`05_Vintage_and_Instant`**](./05_Vintage_and_Instant) | 94 | `.pf2`, `.pf3`, `.bin`, Hald PNG | Instant and retro films: Polaroid color (PX-70, PX-680, Time-Zero, 600, 669, 690, Polachrome, Spectra), Agfa (Ultra 100, Vista, Optima, RSX II 100 Color Slide), Lomography (Redscale 100, Color Tiger, X-Pro, Toy Camera, Holga). |
| [**`06_Portraits_and_Brands`**](./06_Portraits_and_Brands) | 26 | `.pf2`, `.pf3`, `.bin` | Classic camera sensors & dedicated skin tones: Leica, Nikon D2X, Olympus Deep Blue, Canon Studio & Snapshot, Canon 5D Classic Mint/Neutral, Canon 1Ds Mark II, BeautyShot, Fair Skin, Bridal Hanayome, LightFace. |
| [**`07_Creative_and_Artistic`**](./07_Creative_and_Artistic) | 134 | `.pf2`, `.pf3`, `.bin`, Hald PNG | Contemporary & artistic looks: Pixelmator Pro suite (Bright, Calm, Dramatic, Flamboyant, Intense, Vintage, Warm), PictureFX (GoldFX Summer Heat/Sunset, AnalogFX Old Style), Kevin Wang Japanese Pastel Anime, Infrared Fake/Half/IR, Wagokoro, CreativePack film looks. |
| [**`Favorites`**](./Favorites) | 27+ | `.pf2`, `.pf3` | Curated top selections and camera User 1, 2 & 3 slot configurations. |

---

## 📷 Camera Compatibility

These Picture Style profiles (`.pf2` and `.pf3`) are compatible with all modern and classic Canon EOS cameras:

* **Canon EOS R Series (Mirrorless):** EOS R, RP, R3, R5, R6, R6 Mark II, R7, R8, R10, R50, R100 (via EOS Utility 3 or Canon Style Studio USB bypass).
* **Canon EOS M Series:** EOS M100, M200, M50, M50 Mark II, M6, M6 Mark II, M5, M3, M10, original EOS M.
* **Canon EOS DSLRs:** 1D series, 5D series (Classic, Mk II, Mk III, Mk IV), 6D series, 7D series, 80D, 90D, Rebel / xxxD / xxxxD series.
* **Canon Cinema EOS:** C100, C200, C300 (supporting standard Picture Style files).

> [!NOTE]
> **JPEG vs RAW Shooters:**
> * **JPEG Shooting:** The style's 3D LUT, tone curve, and color matrix are permanently baked directly into the in-camera JPEG (*SOOC* — Straight Out Of Camera).
> * **RAW Shooting:** The RAW file preserves all sensor data. When opened in **Canon Digital Photo Professional (DPP 4)**, the Picture Style is selected as the default rendering profile and can be switched losslessly at any time.

---

## 🛠 How to Load Styles Onto Your Camera

Canon cameras allow loading up to **3 custom Picture Styles** simultaneously into the camera's memory slots (**User Defined 1**, **User Defined 2**, and **User Defined 3**).

### Method 1: Canon EOS Utility 3 (Standard)
1. Turn on your camera and connect it to your PC via USB cable.
2. Launch **Canon EOS Utility 3** on your computer.
3. Click on **`Camera settings`** (or **`Remote Shooting`**).
4. Click **`Register Picture Style File`**.
5. Select a slot (**User Defined 1**, **User Defined 2**, or **User Defined 3**).
6. Browse to this repository, select any `.pf2` or `.pf3` file, and click **`Apply`** / **`OK`**.

### Method 2: Canon Style Studio (Direct USB WPD Bypass)
For mirrorless bodies (EOS RP, R8, etc.) where EOS Utility might re-quantize custom LUTs, use the included standalone **Canon Style Studio** (`START_CANON_STYLE_STUDIO.bat`):
1. Connect camera via USB.
2. Click **`Send to Camera`**.
3. Select slot **User Def. 1, 2, or 3** — the loader injects the uncompressed 12-bit LUT payload directly via Windows WPD.

---

## 🔬 Color Science & 3D LUT Engine

This repository is built around a precision mathematical color grading pipeline:
* **Hardware-Accelerated WebGL 2.0:** Uses 3D volumetric textures (`sampler3D`) with native GPU trilinear interpolation for instantaneous grading at 60–120 fps.
* **12-bit Quantization:** Downsamples LUT matrices to Canon's official $33^3$ format (`0x40001070` and `0x40001071`) while preserving color linearity.
* **Full Firmware Validation:** Compiled with Canon's official `EdsCFParse.dll` runtime from Picture Style Editor, guaranteeing 100% valid CRC checksums and camera firmware compliance.

---

## 📜 Credits & Acknowledgments

Honoring the color scientists and photographers who developed these looks over two decades:
* **Thomas Fransson:** Creator of the native `.pf3` film simulation suites (*Astia Pack*, *Portra EDR/STD*, *California Cowboy*, *T-Rex B&W*, *Crowdak*, *Filmic*).
* **Vision Wrangler (Cinescopophilia):** Curator of the legendary 158-style community archive.
* **Kevin Wang:** Author of the celebrated *Japanese Style* pastel and *LOMO* color palettes.
* **Martin Beek (Marvels Film):** Pioneer of independent cinema profiles (*Marvels Cine*).
* **Similaar:** Creator of the *Flaat* dynamic range Log series.
* **LvClFER:** Developer of *Canon Style Studio* and the independent serializer research.
* **Canon Inc.:** Creator of the Picture Style architecture and DPP/PSE image engines.

---

## ⚖ Disclaimer

*Canon*, *EOS*, and *Picture Style* are registered trademarks of Canon Inc. This repository is non-commercial, created for educational, creative, and historical preservation purposes.
