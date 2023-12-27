# Kalorienrechner README

## Aufgabenstellung

Heute wirst du einen Kalorienrechner programmieren. Der erste Schritt besteht darin, den Grundumsatz zu berechnen. Der Grundumsatz wird mit der Harris-Benedict-Formel ermittelt.

**Harris-Benedict-Formel:**
- Grundumsatz bei Männern (Kalorien pro Tag): `66.47 + (13.7 * Körpergewicht in kg) + (5 * Körpergröße in cm) – (6.8 * Alter in Jahren)`
- Grundumsatz bei Frauen (Kalorien pro Tag): `655.1 + (9.6 * Körpergewicht in kg) + (1.8 * Körpergröße in cm) – (4.7 * Alter in Jahren)`

Achtung: Das Ergebnis wird in Kilokalorien (Kcal) ausgegeben!

Um den Gesamtumsatz zu berechnen, multipliziere den Grundumsatz mit dem PAL-Faktor (PAL = Physical Activity Level).

## HTML-Formular

Das HTML-Formular enthält folgende Eingabefelder:
- Auswahl des Geschlechts (weiblich/männlich)
- Alter (als Zahl)
- Gewicht in Kilogramm (als Zahl)
- Größe in Zentimetern (als Zahl)
- Auswahl des Aktivitätslevels (faul/gut/mittel/sehr/super)
- "Aktion" Button zum Auslösen der Berechnung

Außerdem werden die Ergebnisse des Grundumsatzes und Gesamtumsatzes angezeigt.

## JavaScript

Das JavaScript-Skript (`main.js`) verarbeitet die Benutzereingaben und führt die Berechnungen gemäß den oben genannten Formeln durch. Die Ergebnisse werden dann im HTML-Dokument angezeigt.

## CSS

Die Gestaltung des Kalorienrechners erfolgt durch das CSS-Stylesheet (`style.css`), um eine benutzerfreundliche Oberfläche zu gewährleisten.

## Projektinformationen

- **Projektname:** Projekte-Level-3_3
- **Autor:** Farhad Amini
- **Design:** 2024

Viel Erfolg beim Programmieren deines Kalorienrechners! 🎈✨

