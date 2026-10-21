# Canon Picture Styles & 3D LUTs Library (.pf2 & .pf3)

[![Canon](https://img.shields.io/badge/Canon-EOS%20M%20%7C%20EOS%20R%20%7C%20DSLR-red.svg)](https://canon.com)
[![Presets](https://img.shields.io/badge/Presets-550%20Profiles-blue.svg)](.)
[![Formats](https://img.shields.io/badge/Formats-.pf2%20%7C%20.pf3%20%7C%20.bin%20%7C%20Hald%20PNG-success.svg)](.)
[![Live Demo](https://img.shields.io/badge/Demo-Interactive%20Web%20Catalog-brightgreen.svg)](https://mercurydcd.github.io/canon-picture-styles-pf3-catalog/)
[![Technical Catalog](https://img.shields.io/badge/Documentation-Sources%20%26%20History-purple.svg)](CATALOG_SOURCES_AND_HISTORY.md)
[![License](https://img.shields.io/badge/License-Community%20%2F%20Free-orange.svg)](LICENSE)

A comprehensively curated, categorized, and standardized collection of **550 Picture Styles (`.pf2` & `.pf3`) and 3D LUTs** for Canon EOS cameras, Digital Photo Professional (DPP 4), and post-production workflows.

This library consolidates community classics, discontinued Canon styles, iconic analog film simulations (**Fujifilm**, **Kodak**, **Ilford**, **Agfa**, **Polaroid**, **Rollei**), cinematic Log curves (**Technicolor CineStyle**, **Marvels Cine**, **Flaat**), and modern digital color profiles (**Fujifilm X-Trans III**, **Pixelmator Pro**, **PictureFX**), unified into **7 semantic macro-categories** based on photographic aesthetics.

---

## 🌐 Interactive Web Catalog & Triage Suite (`index.html`)

You can explore, filter, compare, and triage all **550 Picture Styles live in your browser** with zero external dependencies and 100% client-side GPU acceleration.

> 🚀 **[Try the Live Web Catalog on GitHub Pages](https://mercurydcd.github.io/canon-picture-styles-pf3-catalog/)**

The platform features two synchronized operational modes (toggle with **`V`** or the top-left switcher):

### 1. 🗂️ Mosaico (550 Matrix Grid)
* **Instant Visual Matrix:** See all 550 profiles rendered in real time on any photograph using WebGL 2.0 trilinear 3D LUT interpolation ($< 0.2\text{ ms}$ per preset).
* **2D Spatial Keyboard Navigation:** Seamless directional navigation across cards (`↑`, `↓`, `←`, `→`) using roving tabindex and visual proximity calculation.
* **11 Pattern Test Scenes:** Instant evaluation on curated high-resolution scenes (Portrait & Skin, High-Contrast Portrait, Outdoor Portrait, Landscape & Sky, Foliage & Nature, Urban Architecture, Street, High Dynamic Range, Golden Hour Sunset, Indoor Ambient, Textures & Detail).
* **Universal RAW & JPG Loader:** Drag & drop any **JPG, PNG, WebP**, or **Canon RAW (`.CR3` / `.CR2` / `.CRW`)** — embedded full-resolution previews are extracted directly in-browser in $< 20\text{ ms}$.
* **Realtime Filtering:** Instant predictive search by name, film emulsion, or creator (*"Velvia"*, *"Portra"*, *"Tri-X"*, *"CineStyle"*, *"Classic Chrome"*), macro-category selector, and ⭐ Favorites toggle.
* **A/B Split Curtain Modal:** Press **`Enter`** on any card (or click) to open a full-screen Top Layer inspection modal (`<dialog>`) with an interactive 60 fps split curtain, detailed metadata sheet, and $0\dots 100\%$ intensity slider.
* **Direct File Downloads:** Download camera-ready `.pf3` or `.pf2` files directly from each card.

### 2. ⚡ Carrusel (Fast 1-by-1 Triage View)
A high-efficiency workflow designed for rapid criba and curating your personal presets:
* **Full-Screen GPU Viewport:** Evaluates the active preset at maximum resolution on your chosen photograph with zero latency.
* **Continuous Queue Loop:** Automatically filters out already saved or discarded styles so you only evaluate pending profiles.
* **Floating Metadata HUD:** Displays Tonal Profile (Look), Recommended Usage, Historical Emulsion Heritage, and Creator in an unobtrusive translucent panel.
* **Multi-Scene Evaluation (`G`):** Toggle between single large photo view and an 11-scene simultaneous evaluation grid.
* **Favorites & Discarded Drawer:** Slide-in management panel (`<dialog>`) to review selections, copy slot assignments formatted for **Canon EOS Utility 3** (User Defined 1, 2, 3), and export your collection to JSON.

---

## ⌨️ Unified Keyboard Hotkeys Matrix

| Key | Context | Action |
| :--- | :--- | :--- |
| **`V`** | Global | Toggle between Matrix Grid (Mosaico) and Carousel (Carrusel) mode via View Transitions. |
| **`H`** | Global | Toggle top navigation bar visibility for distraction-free full-screen viewing (100vh). |
| **`↑ / ↓ / ← / →`** | Matrix Grid | 2D Spatial navigation between preset cards with automatic scroll-into-view. |
| **`Enter`** | Matrix Grid | Open full-screen A/B inspection modal for the currently focused card. |
| **`Space`** | Matrix / Carousel / Modal | Hold in Matrix to peek original / Toggle Before & After in Carousel and Modal. |
| **`K` / `Enter`** | Carousel | **Keep (Mantener)** — Save active preset to favorites and advance immediately. |
| **`D`** | Carousel | **Discard (Descartar)** — Exclude active preset from triage queue and advance. |
| **`S`** | Carousel | **Skip (Saltar)** — Postpone active preset to the end of the queue without discarding. |
| **`←` (Left Arrow)** | Carousel | Step back to the previous preset in the triage queue. |
| **`M`** | Global | Toggle **⭐ Real Favorite** status (synced across Matrix, Carousel, and Modal). |
| **`G`** | Carousel | Toggle between 11-Scene Multi-Grid and Single Large Photo view. |
| **`F`** | Carousel / Modal | Toggle image framing between **Fit** (complete image) and **Cover** (edge-to-edge fill). |
| **`R`** | Carousel | **Restart Loop** — Restore discarded and skipped presets to queue, preserving favorites. |
| **`Esc`** | Modal / Popovers / Drawer | Close active inspection modal, sample photo picker, or triage drawer. |

---

## 💻 Running Locally (Offline)

If you clone or download this repository, launch the included local server runner:

1. Double-click **`START_CATALOG.bat`** (or execute `python -m http.server 8080` in the repository directory).
2. Visit:
   ```text
   http://localhost:8080/index.html
   ```

---

## 📂 Repository Structure & 7 Macro-Categories

The repository is organized into 7 semantic categories. Each folder contains camera-ready profiles in its root, hardware-accelerated binary matrices in `luts_bin/`, and original source assets in `source_luts/`:

```text
├── 01_Fujifilm/              # 103 profiles: Provia, Velvia, Astia, Classic Chrome, Superia, Pro Neg, X-Trans III
├── 02_Kodak/                 #  58 profiles: Portra, Kodachrome, Ektachrome, Ektar, Royal Gold, Ultramax
├── 03_Black_and_White/       #  95 profiles: Ilford HP5/FP4/Delta, Fuji Acros, Kodak Tri-X/T-Max, Rollei IR
├── 04_Cinema_and_Log/        #  40 profiles: Technicolor CineStyle, Marvels Cine, Flaat 1-4, Panalog
├── 05_Vintage_and_Instant/   #  94 profiles: Polaroid PX/600/Time-Zero, Agfa Ultra/Vista, Lomography
├── 06_Portraits_and_Brands/  #  26 profiles: Leica, Nikon D2X, Olympus Blue, Canon Studio, 5D Classic
├── 07_Creative_and_Artistic/ # 134 profiles: Pixelmator Pro, PictureFX, Kevin Wang Anime, Infrared
├── Favorites/                # Curated favorites collection with EOS Utility slot assignments
├── samples/                  # 11 reference pattern scenes for color science evaluation
├── CATALOG_SOURCES_AND_HISTORY.md # Complete technical catalog with emulsion histories and sensitivities
├── build_catalog.py          # Automated metadata generator for presets_data.js
├── index.html                # Zero-dependency, client-side WebGL 2.0 catalog & triage platform
├── lut_engine.js             # High-performance WebGL 2.0 3D LUT engine & RAW extractor
├── presets_data.js           # Pre-compiled JSON index of all 550 profiles
└── START_CATALOG.bat         # One-click local HTTP server launcher
```

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

## 📖 Technical Documentation & Provenance

For detailed sensitometric curve behaviors, historical film emulsion backgrounds, and original creator provenance for each of the 550 profiles, consult:

👉 **[`CATALOG_SOURCES_AND_HISTORY.md`](CATALOG_SOURCES_AND_HISTORY.md)**

---

## 📷 Camera Compatibility

These Picture Style profiles (`.pf2` and `.pf3`) are compatible with all modern and classic Canon EOS cameras:

* **Canon EOS R Series (Mirrorless):** EOS R, RP, R3, R5, R5 Mark II, R6, R6 Mark II, R7, R8, R10, R50, R100.
* **Canon EOS M Series:** EOS M, M2, M3, M5, M6, M6 Mark II, M10, M50, M50 Mark II, M100, M200.
* **Canon EOS DSLRs:** 1D series, 5D series (Classic, Mk II, Mk III, Mk IV), 6D series, 7D series, 80D, 90D, Rebel / xxxD / xxxxD series.
* **Canon Cinema EOS:** C100, C200, C300 (supporting standard Picture Style files).

> [!NOTE]
> **JPEG vs RAW Shooters:**
> * **JPEG Shooting:** The style's 3D LUT, tone curve, and color matrix are permanently baked directly into the in-camera JPEG (*SOOC* — Straight Out Of Camera).
> * **RAW Shooting:** The RAW file preserves all unadulterated sensor data. When opened in **Canon Digital Photo Professional (DPP 4)**, the registered Picture Style is applied as the default rendering profile and can be modified or changed losslessly at any time.

---

## 🛠 How to Register Styles Onto Your Camera

Canon EOS cameras allow registering up to **3 custom Picture Styles** simultaneously into the camera's internal memory slots (**User Defined 1**, **User Defined 2**, and **User Defined 3**).

### Via Canon EOS Utility 3 (Official Method)
1. Turn on your camera and connect it to your computer via USB cable.
2. Launch **Canon EOS Utility 3**.
3. Select **`Camera settings`** (or **`Remote Shooting`**).
4. Click **`Register Picture Style File`**.
5. Select the target slot (**User Defined 1**, **User Defined 2**, or **User Defined 3**).
6. Browse to this repository, select any `.pf2` or `.pf3` file, and click **`Apply`** / **`OK`**.

---

## 🔬 Color Science & WebGL 2.0 Engine Architecture

This platform leverages high-precision mathematical transformations:
* **Hardware-Accelerated WebGL 2.0:** Employs 3D volumetric textures (`sampler3D`) with native GPU trilinear interpolation for instantaneous grading ($< 0.2\text{ ms}$ per frame).
* **12-bit Quantization:** Downsamples LUT matrices to Canon's official $33^3$ format (`0x40001070` and `0x40001071`) preserving highlight linearity and shadow fidelity.
* **Firmware Validation:** Validated with Canon's official `EdsCFParse.dll` runtime from Picture Style Editor, ensuring 100% valid CRC checksums and camera firmware compliance.
* **Client-Side RAW Decoding:** Custom binary parser reads the TIFF/IFD structure of Canon RAW files (`.CR3`, `.CR2`, `.CRW`) and streams the embedded preview JPEG in $< 20\text{ ms}$ without server-side processing.

---

## 📜 Credits & Acknowledgments

Honoring the color scientists and photographers who developed these looks over two decades:
* **Thomas Fransson:** Creator of native `.pf3` film simulations (*Astia Pack*, *Portra EDR/STD*, *California Cowboy*, *T-Rex B&W*, *Crowdak*, *Filmic*).
* **Vision Wrangler (Cinescopophilia):** Curator of the legendary 158-style community archive.
* **Kevin Wang:** Author of the celebrated *Japanese Style* pastel and *LOMO* color palettes.
* **Martin Beek (Marvels Film):** Pioneer of independent cinema profiles (*Marvels Cine*).
* **Similaar:** Creator of the *Flaat* dynamic range Log series.
* **LvClFER:** Developer of *Canon Style Studio* and independent serializer research.
* **Canon Inc.:** Creator of the Picture Style architecture and DPP/PSE image engines.

---

## ⚖ Disclaimer

*Canon*, *EOS*, and *Picture Style* are registered trademarks of Canon Inc. This repository is non-commercial, created for educational, creative, and historical preservation purposes.
