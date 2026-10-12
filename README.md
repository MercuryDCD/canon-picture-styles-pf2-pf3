# Canon Picture Styles Library (.pf2 & .pf3)

[![Canon](https://img.shields.io/badge/Canon-EOS%20M%20%7C%20EOS%20R%20%7C%20DSLR-red.svg)](https://canon.com)
[![Presets](https://img.shields.io/badge/Presets-186%20Profiles-blue.svg)](.)
[![Formats](https://img.shields.io/badge/Formats-.pf2%20%7C%20.pf3-success.svg)](.)
[![License](https://img.shields.io/badge/License-Community%20%2F%20Free-orange.svg)](LICENSE)

A comprehensively curated, categorized, and cleaned collection of **186 Picture Styles (`.pf2` and `.pf3`)** for Canon cameras.

This library consolidates the greatest community profiles, official discontinued Canon styles, iconic film simulations (**Fujifilm**, **Kodak**, **Agfa**), industry-standard video Log profiles (**Technicolor CineStyle**, **Flaat**, **Marvels Cine**), and aesthetic looks (**Kevin Wang**, **Lomography**, **Infrared**).

All file names have been standardized into clear, human-readable English terminology, organized across 7 distinct categories with detailed documentation for each preset.

---

## 📂 Repository Structure

| Category | Profiles | Description |
| :--- | :---: | :--- |
| [**`01_Fujifilm_Film_Simulations`**](./01_Fujifilm_Film_Simulations) | 28 | Astia 100F, Provia 100F (RDP III), Velvia 50/100F (RVP), Pro Neg Hi/Std, Pro 400H, Superia Reala, FP-100C |
| [**`02_Kodak_Film_Simulations`**](./02_Kodak_Film_Simulations) | 9 | Kodak Portra 400/160, Kodachrome 25/64 (RetroKrum), Ektachrome EES & Cross-Process |
| [**`03_Cinema_and_Log`**](./03_Cinema_and_Log) | 41 | Technicolor CineStyle, Marvels Cine, Similaar Flaat (1-4), Panavision Genesis, California Cowboy, EuroTrip |
| [**`04_Black_and_White_Monochrome`**](./04_Black_and_White_Monochrome) | 14 | Kodak T-Max 400, Kodak Tri-X (T-Rex), Filmic B&W, fine-art monochrome tonal curves (1 to 5) |
| [**`05_Portraits_and_Skin_Tones`**](./05_Portraits_and_Skin_Tones) | 25 | Canon Official Studio & Snapshot, LightFace, cportrait clean skin, Bounced Flash, Hanayome Bridal |
| [**`06_Classic_Cameras_and_Brands`**](./06_Classic_Cameras_and_Brands) | 11 | Nikon D2X, Olympus Deep Blue, Agfa RSX II, Pentax K, Canon 5D Classic & 1Ds Mark II sensor science |
| [**`07_Creative_and_Lomo`**](./07_Creative_and_Lomo) | 99 | Kevin Wang Japanese Style (Pastel), LOMO vignette, Infrared (IR), Canon Nostalgia, Twilight, Emerald |

---

## 📷 Camera Compatibility

These Picture Style profiles (`.pf2` and `.pf3`) are fully compatible with virtually all modern and classic Canon EOS cameras, including:

* **Canon EOS M Series:** EOS M100, M200, M50, M50 Mark II, M6, M6 Mark II, M5, M3, M10, original EOS M.
* **Canon EOS R Series (Mirrorless):** EOS R, RP, R3, R5, R6, R6 Mark II, R7, R8, R10, R50, R100 (via EOS Utility 3).
* **Canon EOS DSLRs:** 1D series, 5D series (Classic, Mk II, Mk III, Mk IV), 6D series, 7D series, 80D, 90D, Rebel / xxxD / xxxxD series.
* **Canon PowerShot:** High-end models supporting custom Picture Styles (G1X, G3X, G5X, etc.).

> [!NOTE]
> **JPEG vs RAW Shooters:**
> * **JPEG Shooting:** The style's tone curve and color matrix are permanently baked directly into the JPEG file straight out of camera (*SOOC*).
> * **RAW Shooting:** The RAW file preserves all sensor data. When opened in **Canon Digital Photo Professional (DPP 4)**, the style is selected as the default profile, and you can switch between all 186 styles at any time in post-production with zero quality loss.

---

## 🛠 How to Load Styles Onto Your Camera

Canon cameras allow loading up to **3 custom Picture Styles** simultaneously into the camera's memory slots (**User Defined 1**, **User Defined 2**, and **User Defined 3**).

### Step-by-Step Installation via Canon EOS Utility 3:
1. **Connect Camera:** Turn on your camera and connect it to your PC via USB cable (recommended for maximum stability) or Wi-Fi.
2. **Open EOS Utility:** Launch **Canon EOS Utility 3** on your computer.
3. **Camera Settings:** Click on **`Camera settings`** (or **`Remote Shooting`**).
4. **Register Picture Style:** In the shooting panel, select the camera icon tab and click **`Register Picture Style File`**.
5. **Select Slot:** Choose one of the 3 user slots (**User Defined 1**, **User Defined 2**, or **User Defined 3**).
6. **Browse & Upload:** Click the folder icon, navigate to this library, select your preferred `.pf2` or `.pf3` file, and click **`Apply`** / **`OK`**.
7. **Disconnect:** Once loaded, disconnect the camera safely.

---

## 💡 In-Camera Calibration & Tuning Tips

Every Picture Style serves as a base mathematical curve. You can fine-tune the look directly in your camera menu:

* **Contrast (`-4` to `+4`):** If a film simulation feels too aggressive in harsh midday light, drop contrast by `-1` or `-2` to recover shadow and highlight details.
* **Saturation (`-4` to `+4`):** For slide film looks (like *Velvia*), lowering saturation by `-1` can yield a more modern cinematic balance.
* **Sharpness (Strength / Fineness / Threshold):** For authentic analog grit, lower in-camera digital sharpness (`Strength: 1-2`) so the image doesn't appear overly digital.
* **White Balance (WB Shift):** To achieve warmer golden hour aesthetics (popular in Kodak Portra recipes), shift your White Balance towards **A (Amber) +2** to **+4** and **M (Magenta) +1**.

---

## 📜 Credits & Acknowledgments

This repository is an archival preservation effort honoring the independent color scientists and photographers who crafted these profiles over two decades of Canon digital photography:

* **Thomas Fransson:** Creator of the native `.pf3` film simulation suites (*Astia Pack*, *Portra EDR/STD*, *California Cowboy*, *T-Rex B&W*, *Crowdak*, *Filmic*).
* **Vision Wrangler (Cinescopophilia):** Curator of the legendary 158-style community archive.
* **Kevin Wang:** Author of the celebrated *Japanese Style* pastel and *LOMO* color palettes.
* **Martin Beek (Marvels Film):** Pioneer of independent cinema profiles (*Marvels Cine*).
* **Similaar:** Creator of the *Flaat* dynamic range Log series.
* **Canon Inc.:** Designer of the official Picture Style architecture, Picture Style Editor, and legacy camera profiles.

---

## ⚖ Disclaimer

*Canon*, *EOS*, and *Picture Style* are registered trademarks of Canon Inc. This repository is non-commercial, created for educational, creative, and historical preservation purposes.

---
⭐ *If you find this library useful, consider starring the repository!*