/**
 * Canon Picture Styles Suite - Modern Internationalization (i18n) Engine
 * 
 * Client-side locale detection based on browser preferences (navigator.languages),
 * regional IANA timezones (Intl API), and explicit persistent preference (localStorage).
 * Provides seamless parallel bilingual support (Spanish / English) without reload.
 */

(function(window) {
    'use strict';

    const STORAGE_KEY = 'canon_locale';

    const TRANSLATIONS = {
        en: {
            meta: {
                page_title: "Canon Picture Styles — Interactive Catalog & Fast Triage",
                lang_code: "EN",
                lang_switch_title: "Switch language to Spanish (ES) / Cambiar a Español"
            },
            brand: {
                badge: "EOS",
                title: "Picture Styles"
            },
            drag: {
                title: "Drop your photo to preview the catalog",
                sub: "Supported formats: Canon RAW (.CR3 / .CR2 / .CRW) & JPG / PNG / WebP"
            },
            header: {
                view_grid: "Grid",
                view_grid_title: "Grid View (550 presets) - Key: V",
                view_carousel: "Carousel",
                view_carousel_title: "1-by-1 Fast Triage (Carousel) - Key: V",
                sample_photo_title: "Select sample photo",
                sample_photo_header: "Sample Photo",
                upload_btn: "Upload",
                upload_btn_title: "Upload your own photo (.CR3 / .CR2 / JPG / PNG)",
                category_filter_title: "Filter by macro-category",
                all_categories: "All categories",
                search_placeholder: "Search preset, film stock, or author...",
                search_aria: "Search presets by name, film stock, or author",
                clear_search_aria: "Clear search input",
                fav_filter_title: "Show favorites only",
                density_group_title: "Thumbnail size",
                density_compact: "Compact view (more thumbnails)",
                density_normal: "Standard view",
                density_large: "Large view",
                original_btn: "Original",
                original_btn_title: "Hold click or press SPACEBAR to view original",
                status_pill_title: "Visible presets / Total",
                intensity_label: "LUT",
                intensity_title: "Global grading intensity (0-100%)",
                support_btn: "Support",
                support_btn_title: "Support this catalog / Donate",
                collapse_header_title: "Hide top bar (Shortcut: H)",
                restore_header_title: "Show top bar (Shortcut: H)",
                restore_header_label: "Top Bar"
            },
            carousel: {
                after_mode: "AFTER",
                before_mode: "BEFORE",
                mode_toggle_title: "Toggle Before/After (Shortcut: SPACE or B)",
                mode_11_title: "View all 11 sample scenes at once (Shortcut: G)",
                mode_1_title: "View single large photo (Shortcut: G)",
                display_mode_title: "Carousel display mode (Shortcut: G)",
                queue_mode_title: "Triage queue mode",
                queue_pending: "Pending",
                queue_pending_title: "Continuous queue (excludes discarded presets)",
                queue_all: "All",
                queue_all_title: "Browse full catalog",
                folder_filter_title: "Filter carousel by folder",
                all_folders: "All folders",
                discard_btn: "Discard",
                discard_title: "Discard style from loop and move to next (Shortcut: D or Left Arrow)",
                skip_btn: "Skip",
                skip_title: "Skip for now without discarding (Shortcut: S or Down Arrow)",
                keep_btn: "Keep",
                keep_title: "Save to favorites and advance (Shortcut: K, ENTER, or Right Arrow)",
                star_title: "Toggle favorite star (Shortcut: M)",
                restart_title: "Reset loop and restore discarded presets (Shortcut: R)",
                drawer_title: "Open favorites & discarded drawer",
                fit_full: "Full Photo",
                fit_fill: "Fill Crop",
                fit_title: "Toggle between Fit (full photo) and Fill (crop) (Shortcut: F)",
                skipped_badge: "Skipped",
                badge_original: "ORIGINAL",
                badge_applied: "PRESET APPLIED",
                badge_active: "active",
                end_of_triage: "End of triage",
                entire_catalog: "the entire catalog"
            },
            hud: {
                look_label: "Tonal Profile (Look)",
                best_for_label: "Best For",
                heritage_label: "Heritage / Emulsion",
                author_label: "Origin / Author",
                hide_info: "Hide info (▾)",
                show_info: "Show info (▴)"
            },
            shortcuts: {
                space: "Before/After",
                keep: "Keep",
                discard: "Discard",
                skip: "Skip",
                prev: "Prev",
                star: "Star",
                scenes: "11/1",
                fit: "Fit/Fill",
                uibar: "Top Bar",
                reset: "Reset"
            },
            empty: {
                title_all: "Triage Completed!",
                title_folder: "Folder Completed: {folder}!",
                desc: "You have reviewed all styles in this selection.<br>Your favorites are saved and ready.",
                desc_no_favs: "You have no saved favorites in this list yet.<br>Press K or click Keep to save styles.",
                btn_reset: "Reset Loop",
                btn_grid: "View in Grid"
            },
            drawer: {
                tab_favorites: "Favorites ({count})",
                tab_discarded: "Discarded ({count})",
                close_title: "Close drawer (Esc)",
                copy_eos: "Copy for EOS Utility (Top 3)",
                export_json: "Export JSON",
                import_json: "Import JSON",
                restore_all: "Restore all discarded",
                support_title: "Support this Catalog",
                support_desc: "Kept free & maintained by community donations",
                support_btn: "Support",
                no_favorites: "No saved presets yet. Press K or click Keep during triage.",
                no_discarded: "No discarded presets.",
                camera_slot: "Slot {slot}:",
                unassigned: "Unassigned",
                notes_placeholder: "Custom notes...",
                download_btn_title: "Download .pf2/.pf3 file for camera",
                remove_title: "Remove from favorites",
                restore_btn: "Restore"
            },
            keep_modal: {
                title: "Save to Favorites",
                desc: "Assign a custom name or notes for your session:",
                name_label: "Custom Name",
                notes_label: "Notes / Tonal Feel",
                notes_placeholder: "e.g., Warm tones for golden hour portraits...",
                cancel_btn: "Cancel",
                save_btn: "Save (Enter)"
            },
            modal: {
                category_badge: "Category",
                close_title: "Close (Esc)",
                star_title: "Toggle favorite",
                look_label: "Tonal Profile (Look)",
                best_for_label: "Best For",
                heritage_label: "Emulsion / Historical Heritage",
                author_label: "Origin / Author",
                intensity_label: "Modal Intensity",
                download_btn: "Download Camera File",
                prev_btn: "Prev",
                next_btn: "Next",
                donate_btn: "Support catalog maintenance"
            },
            donation: {
                badge: "Support",
                title: "Support this Catalog",
                close_title: "Close (Esc)",
                desc: "This catalog is 100% free, open-source, and ad-free. If these styles save you time or help your photography, you can support ongoing maintenance through either platform:",
                kofi_pill: "Quick Tip",
                kofi_meta: "Card, Apple Pay, Google Pay or PayPal • No account required",
                github_pill: "GitHub Account",
                github_meta: "One-time or monthly contribution via your GitHub profile"
            },
            categories: {
                "01_Fujifilm": "Fujifilm",
                "02_Kodak": "Kodak",
                "03_Black_and_White": "Black and White",
                "04_Cinema_and_Log": "Cinema and Log",
                "05_Vintage_and_Instant": "Vintage and Instant",
                "06_Portraits_and_Brands": "Portraits and Brands",
                "07_Creative_and_Artistic": "Creative and Artistic",
                "favorites": "Favorites"
            },
            samples: {
                scene_1: { name: "1. Portrait & Skin", desc: "Skin tones and soft shadows" },
                scene_2: { name: "2. High-Contrast Portrait", desc: "Facial contrast and midtones" },
                scene_3: { name: "3. Outdoor Portrait", desc: "Direct sunlight and natural tones" },
                scene_4: { name: "4. Landscape & Sky", desc: "Blue skies, water, and distant foliage" },
                scene_5: { name: "5. Foliage & Nature", desc: "Chlorophyll greens and botanical saturation" },
                scene_6: { name: "6. Urban Architecture", desc: "Straight lines, textures, and medium contrast" },
                scene_7: { name: "7. Street Scene", desc: "Urban contrast and dense shadows" },
                scene_8: { name: "8. High Dynamic Range", desc: "Highlight roll-off and deep shadows" },
                scene_9: { name: "9. Golden Hour Sunset", desc: "Golden tones and warm gradation" },
                scene_10: { name: "10. Indoor Ambient Light", desc: "Tungsten, mixed lighting, and warmth" },
                scene_11: { name: "11. Textures & Detail", desc: "Micro-contrast, grain, and fine sharpness" }
            },
            toasts: {
                fav_added: "Added to favorites: {name}",
                fav_removed: "Removed from favorites: {name}",
                preset_kept: "Saved to favorites: {name}",
                preset_discarded: "Discarded: {name}",
                preset_skipped: "Skipped: {name}",
                queue_reset: "Triage loop reset",
                sample_changed: "Sample changed: {name}",
                copied_eos: "Copied top presets for EOS Utility!",
                copied_name: "Preset name copied to clipboard",
                exported_json: "Exported {count} favorites to JSON",
                imported_json: "Imported {count} favorites ({existing} already saved)",
                import_invalid_json: "Invalid JSON file or unreadable structure",
                import_no_presets: "No matching Picture Styles found in JSON file",
                restored_all: "Restored all discarded presets",
                raw_extracted: "Extracted JPEG preview from RAW ({time} ms)",
                raw_error: "Error processing RAW file: {msg}",
                lang_switched: "Language switched to English",
                fit_contain: "⛶ Full Photo (no crop)",
                fit_cover: "🔲 Fill Crop (full frame)"
            }
        },

        es: {
            meta: {
                page_title: "Canon Picture Styles — Catálogo Interactivo y Triaje Rápido",
                lang_code: "ES",
                lang_switch_title: "Cambiar idioma a Inglés (EN) / Switch to English"
            },
            brand: {
                badge: "EOS",
                title: "Estilos de Imagen"
            },
            drag: {
                title: "Suelta tu foto para previsualizar el catálogo",
                sub: "Formatos compatibles: Canon RAW (.CR3 / .CR2 / .CRW) y JPG / PNG / WebP"
            },
            header: {
                view_grid: "Mosaico",
                view_grid_title: "Vista Mosaico (550 estilos) - Tecla: V",
                view_carousel: "Carrusel",
                view_carousel_title: "Triaje 1 a 1 Rápido (Carrusel) - Tecla: V",
                sample_photo_title: "Seleccionar foto de muestra",
                sample_photo_header: "Foto de Muestra",
                upload_btn: "Subir",
                upload_btn_title: "Sube tu propia foto (.CR3 / .CR2 / JPG / PNG)",
                category_filter_title: "Filtrar por macro-categoría",
                all_categories: "Todas las categorías",
                search_placeholder: "Buscar estilo, película o autor...",
                search_aria: "Buscar estilos por nombre, tipo de película o autor",
                clear_search_aria: "Borrar búsqueda",
                fav_filter_title: "Mostrar solo favoritos",
                density_group_title: "Tamaño de miniaturas",
                density_compact: "Vista compacta (más miniaturas)",
                density_normal: "Vista estándar",
                density_large: "Vista grande",
                original_btn: "Original",
                original_btn_title: "Mantén pulsado o presiona ESPACIO para ver el original",
                status_pill_title: "Estilos visibles / Total",
                intensity_label: "LUT",
                intensity_title: "Intensidad global de gradación (0-100%)",
                support_btn: "Apoyar",
                support_btn_title: "Apoyar este catálogo / Donar",
                collapse_header_title: "Ocultar barra superior (Tecla: H)",
                restore_header_title: "Mostrar barra superior (Tecla: H)",
                restore_header_label: "Barra Superior"
            },
            carousel: {
                after_mode: "DESPUÉS",
                before_mode: "ANTES",
                mode_toggle_title: "Alternar Antes/Después (Atajo: ESPACIO o B)",
                mode_11_title: "Ver las 11 escenas de muestra a la vez (Atajo: G)",
                mode_1_title: "Ver foto individual grande (Atajo: G)",
                display_mode_title: "Modo de visualización de carrusel (Atajo: G)",
                queue_mode_title: "Modo de cola de triaje",
                queue_pending: "Pendientes",
                queue_pending_title: "Cola continua (excluye estilos descartados)",
                queue_all: "Todos",
                queue_all_title: "Explorar el catálogo completo",
                folder_filter_title: "Filtrar carrusel por carpeta",
                all_folders: "Todas las carpetas",
                discard_btn: "Descartar",
                discard_title: "Descartar estilo del bucle y pasar al siguiente (Atajo: D o Flecha Izq)",
                skip_btn: "Saltar",
                skip_title: "Saltar por ahora sin descartar (Atajo: S o Flecha Abajo)",
                keep_btn: "Guardar",
                keep_title: "Guardar en favoritos y avanzar (Atajo: K, ENTER o Flecha Der)",
                star_title: "Alternar estrella de favorito (Atajo: M)",
                restart_title: "Reiniciar bucle y restaurar estilos descartados (Atajo: R)",
                drawer_title: "Abrir panel de favoritos y descartados",
                fit_full: "Foto Completa",
                fit_fill: "Llenar Recorte",
                fit_title: "Alternar entre Ajustar (foto completa) y Llenar (recorte) (Atajo: F)",
                skipped_badge: "Saltado",
                badge_original: "ORIGINAL",
                badge_applied: "ESTILO APLICADO",
                badge_active: "activos",
                end_of_triage: "Fin del triaje",
                entire_catalog: "todo el catálogo"
            },
            hud: {
                look_label: "Perfil Tonal (Look)",
                best_for_label: "Ideal Para",
                heritage_label: "Emulsión / Historia",
                author_label: "Origen / Autor",
                hide_info: "Ocultar info (▾)",
                show_info: "Mostrar info (▴)"
            },
            shortcuts: {
                space: "Antes/Después",
                keep: "Guardar",
                discard: "Descartar",
                skip: "Saltar",
                prev: "Anterior",
                star: "Favorito",
                scenes: "11/1",
                fit: "Ajustar/Llenar",
                uibar: "Barra Superior",
                reset: "Reiniciar"
            },
            empty: {
                title_all: "¡Triaje Completado!",
                title_folder: "Carpeta Completada: {folder}!",
                desc: "Has revisado todos los estilos de esta selección.<br>Tus favoritos están guardados y listos.",
                desc_no_favs: "No tienes favoritos guardados en esta lista todavía.<br>Presiona K o haz clic en Guardar para conservar estilos.",
                btn_reset: "Reiniciar Bucle",
                btn_grid: "Ver en Mosaico"
            },
            drawer: {
                tab_favorites: "Favoritos ({count})",
                tab_discarded: "Descartados ({count})",
                close_title: "Cerrar panel (Esc)",
                copy_eos: "Copiar para EOS Utility (Top 3)",
                export_json: "Exportar JSON",
                import_json: "Importar JSON",
                restore_all: "Restaurar todos los descartados",
                support_title: "Apoya este Catálogo",
                support_desc: "Gratuito y mantenido con donaciones de la comunidad",
                support_btn: "Apoyar",
                no_favorites: "No hay estilos guardados aún. Presiona K o haz clic en Guardar durante el triaje.",
                no_discarded: "No hay estilos descartados.",
                camera_slot: "Ranura {slot}:",
                unassigned: "Sin asignar",
                notes_placeholder: "Notas personalizadas...",
                download_btn_title: "Descargar archivo .pf2/.pf3 para la cámara",
                remove_title: "Quitar de favoritos",
                restore_btn: "Restaurar"
            },
            keep_modal: {
                title: "Guardar en Favoritos",
                desc: "Asigna un nombre personalizado o notas para tu sesión:",
                name_label: "Nombre Personalizado",
                notes_label: "Notas / Sensación Tonal",
                notes_placeholder: "ej. Tonos cálidos para retratos en hora dorada...",
                cancel_btn: "Cancelar",
                save_btn: "Guardar (Enter)"
            },
            modal: {
                category_badge: "Categoría",
                close_title: "Cerrar (Esc)",
                star_title: "Alternar favorito",
                look_label: "Perfil Tonal (Look)",
                best_for_label: "Ideal Para",
                heritage_label: "Emulsión / Legado Histórico",
                author_label: "Origen / Autor",
                intensity_label: "Intensidad Modal",
                download_btn: "Descargar Archivo para Cámara",
                prev_btn: "Anterior",
                next_btn: "Siguiente",
                donate_btn: "Apoyar mantenimiento del catálogo"
            },
            donation: {
                badge: "Apoyo",
                title: "Apoya este Catálogo",
                close_title: "Cerrar (Esc)",
                desc: "Este catálogo es 100% gratuito, de código abierto y sin publicidad. Si estos estilos te ahorran tiempo o impulsan tu fotografía, puedes apoyar su mantenimiento continuo en cualquiera de estas plataformas:",
                kofi_pill: "Donación Rápida",
                kofi_meta: "Tarjeta, Apple Pay, Google Pay o PayPal • Sin registro obligatorio",
                github_pill: "Cuenta GitHub",
                github_meta: "Contribución única o mensual con tu cuenta de GitHub"
            },
            categories: {
                "01_Fujifilm": "Fujifilm",
                "02_Kodak": "Kodak",
                "03_Black_and_White": "Blanco y Negro",
                "04_Cinema_and_Log": "Cine y Log",
                "05_Vintage_and_Instant": "Vintage e Instantáneo",
                "06_Portraits_and_Brands": "Retratos y Marcas",
                "07_Creative_and_Artistic": "Creativo y Artístico",
                "favorites": "Favoritos"
            },
            samples: {
                scene_1: { name: "1. Retrato y Piel", desc: "Tonos de piel y sombras suaves" },
                scene_2: { name: "2. Retrato de Alto Contraste", desc: "Contraste facial y tonos medios" },
                scene_3: { name: "3. Retrato en Exteriores", desc: "Luz solar directa y tonos naturales" },
                scene_4: { name: "4. Paisaje y Cielo", desc: "Cielos azules, agua y vegetación lejana" },
                scene_5: { name: "5. Follaje y Naturaleza", desc: "Verdes clorofila y saturación botánica" },
                scene_6: { name: "6. Arquitectura Urbana", desc: "Líneas rectas, texturas y contraste medio" },
                scene_7: { name: "7. Escena Callejera", desc: "Contraste urbano y sombras densas" },
                scene_8: { name: "8. Alto Rango Dinámico", desc: "Transición de altas luces y sombras profundas" },
                scene_9: { name: "9. Puesta de Sol Dorada", desc: "Tonos dorados y gradación cálida" },
                scene_10: { name: "10. Iluminación Interior", desc: "Tungsteno, luces mixtas y calidez ambiental" },
                scene_11: { name: "11. Texturas y Detalles", desc: "Microcontraste, grano y nitidez fina" }
            },
            toasts: {
                fav_added: "Añadido a favoritos: {name}",
                fav_removed: "Eliminado de favoritos: {name}",
                preset_kept: "Guardado en favoritos: {name}",
                preset_discarded: "Descartado: {name}",
                preset_skipped: "Saltado: {name}",
                queue_reset: "Cola de triaje reiniciada",
                sample_changed: "Escena cambiada: {name}",
                copied_eos: "¡Estilos Top copiados para EOS Utility!",
                copied_name: "Nombre copiado al portapapeles",
                exported_json: "{count} favoritos exportados a JSON",
                imported_json: "Importados {count} favoritos ({existing} ya guardados)",
                import_invalid_json: "Archivo JSON inválido o estructura no reconocida",
                import_no_presets: "No se encontraron estilos válidos en el archivo JSON",
                restored_all: "Todos los descartados han sido restaurados",
                raw_extracted: "JPEG extraído de RAW en {time} ms",
                raw_error: "Error al procesar archivo RAW: {msg}",
                lang_switched: "Idioma cambiado a Español",
                fit_contain: "⛶ Foto Completa (sin recorte)",
                fit_cover: "🔲 Llenar Recorte (pantalla completa)"
            }
        }
    };

    /**
     * Regional Hispanic/Spanish-speaking timezones for geolocation inference
     */
    const SPANISH_TIMEZONES = [
        'Europe/Madrid', 'Europe/Ceuta', 'Atlantic/Canary',
        'America/Mexico_City', 'America/Cancun', 'America/Merida', 'America/Monterrey', 'America/Mazatlan', 'America/Tijuana',
        'America/Hermosillo', 'America/Chihuahua', 'America/Bogota', 'America/Buenos_Aires', 'America/Cordoba',
        'America/Argentina', 'America/Santiago', 'America/Lima', 'America/Caracas', 'America/Guatemala',
        'America/Havana', 'America/Santo_Domingo', 'America/Tegucigalpa', 'America/Managua', 'America/San_Jose',
        'America/Panama', 'America/Montevideo', 'America/Asuncion', 'America/Guayaquil', 'America/La_Paz',
        'America/El_Salvador', 'America/Puerto_Rico'
    ];

    /**
     * Determines user's preferred language using modern Web APIs:
     * 1. localStorage override
     * 2. navigator.languages (BCP 47 language preference list)
     * 3. IANA TimeZone regional detection (Intl API)
     */
    function detectLocale() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved === 'es' || saved === 'en') return saved;
        } catch (e) {}

        // Check browser language preferences
        const userLangs = (navigator.languages && navigator.languages.length)
            ? navigator.languages
            : [navigator.language || navigator.userLanguage || ''];

        for (const l of userLangs) {
            if (!l) continue;
            const code = l.toLowerCase();
            if (code.startsWith('es')) return 'es';
        }

        // Check regional origin via Intl TimeZone
        try {
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
            if (SPANISH_TIMEZONES.some(zone => tz === zone || tz.startsWith(zone))) {
                return 'es';
            }
        } catch (e) {}

        return 'en';
    }

    let currentLocale = detectLocale();

    /**
     * Resolves nested property path in translation dictionary (e.g. "header.search_placeholder")
     */
    function resolveKey(obj, path) {
        if (!obj || !path) return null;
        const parts = path.split('.');
        let curr = obj;
        for (const p of parts) {
            if (curr && typeof curr === 'object' && p in curr) {
                curr = curr[p];
            } else {
                return null;
            }
        }
        return curr;
    }

    /**
     * Get translated text with optional token interpolation (e.g., {count}, {name})
     */
    function t(key, params = {}, fallback = '') {
        const dict = TRANSLATIONS[currentLocale] || TRANSLATIONS.en;
        let text = resolveKey(dict, key);
        if (text === null || text === undefined) {
            text = resolveKey(TRANSLATIONS.en, key);
        }
        if (text === null || text === undefined) {
            return fallback || key;
        }

        if (typeof text === 'string' && params && typeof params === 'object') {
            for (const [pKey, pVal] of Object.entries(params)) {
                text = text.replace(new RegExp(`\\{${pKey}\\}`, 'g'), String(pVal));
            }
        }
        return text;
    }

    function getCategory(catId) {
        const dict = TRANSLATIONS[currentLocale] || TRANSLATIONS.en;
        if (dict.categories && dict.categories[catId]) {
            return dict.categories[catId];
        }
        return TRANSLATIONS.en.categories[catId] || catId;
    }

    function getSample(sampleId) {
        const dict = TRANSLATIONS[currentLocale] || TRANSLATIONS.en;
        if (dict.samples && dict.samples[sampleId]) {
            return dict.samples[sampleId];
        }
        return TRANSLATIONS.en.samples[sampleId] || null;
    }

    /**
     * Translates all DOM elements containing data-i18n attributes
     */
    function translateDOM(root = document) {
        // Document language tag & title
        document.documentElement.lang = currentLocale;
        const pageTitle = t('meta.page_title');
        if (pageTitle) document.title = pageTitle;

        // Text content
        root.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const val = t(key);
            if (val) {
                if (key.endsWith('_html')) {
                    el.innerHTML = val;
                } else {
                    el.textContent = val;
                }
            }
        });

        // Tooltip / title attribute
        root.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            const val = t(key);
            if (val) el.setAttribute('title', val);
        });

        // Placeholder attribute
        root.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const val = t(key);
            if (val) el.setAttribute('placeholder', val);
        });

        // Accessibility aria-label
        root.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            const val = t(key);
            if (val) el.setAttribute('aria-label', val);
        });

        // Update language toggle button label
        const langCodeLabel = document.getElementById('langCodeLabel');
        if (langCodeLabel) {
            langCodeLabel.textContent = currentLocale.toUpperCase();
        }
        const langToggleBtn = document.getElementById('btnLangToggle');
        if (langToggleBtn) {
            langToggleBtn.setAttribute('title', t('meta.lang_switch_title'));
            langToggleBtn.setAttribute('aria-label', t('meta.lang_switch_title'));
        }
    }

    /**
     * Switch locale programmatically
     */
    function setLocale(newLocale) {
        if (newLocale !== 'es' && newLocale !== 'en') return;
        currentLocale = newLocale;
        try {
            localStorage.setItem(STORAGE_KEY, newLocale);
        } catch (e) {}

        translateDOM(document);

        // Dispatch CustomEvent for application components to reactively update
        window.dispatchEvent(new CustomEvent('canon-locale-changed', {
            detail: { locale: newLocale }
        }));
    }

    function toggleLocale() {
        setLocale(currentLocale === 'es' ? 'en' : 'es');
    }

    // Export to global window
    window.I18N = {
        get locale() { return currentLocale; },
        detectLocale,
        getLocale: () => currentLocale,
        setLocale,
        toggleLocale,
        t,
        getCategory,
        getSample,
        translateDOM,
        SPANISH_TIMEZONES
    };

    // Set document lang early on parse
    document.documentElement.lang = currentLocale;

})(window);
