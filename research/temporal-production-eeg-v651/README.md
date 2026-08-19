# Temporal Production EEG Analysis (v6.5.1)

Public reproducibility archive for the manuscript on distributed multiband scalp EEG during human temporal production.

## Analysis code

- `run_ds004200_reproducible_v6_5_1_original_compatible.m` — frozen MATLAB analysis pipeline used for the final analyses.
- Pipeline version: 6.5.1
- MATLAB run environment: R2024a Update 4
- EEGLAB: 2024.0
- Required toolboxes/plugins: Signal Processing Toolbox; Statistics and Machine Learning Toolbox; ICLabel.
- Master random seed: 20260810
- SHA-256 of the archived MATLAB file: `b168e830bc5e2b0dcc988526e7eb021cebf3f20a93c5298b569922ab956c7e9f`

## Data

The analysis uses the public OpenNeuro dataset **ds004200** (Hassall et al., 2022), version 1.0.0:

- Dataset DOI: https://doi.org/10.18112/openneuro.ds004200.v1.0.0
- OpenNeuro accession: https://openneuro.org/datasets/ds004200

The raw data are not redistributed here. Download the dataset from OpenNeuro and provide the dataset root to the MATLAB pipeline through the user configuration.

## Reproducibility notes

The pipeline implements a 32-channel scalp-only analysis with linked-mastoid rereferencing, ICA/ICLabel artifact rejection, endpoint-specific quality control, causal trial-level spectral features, cluster-based scalp inference, nested participant-held-out ridge prediction, strict reconstructed-block sensitivity analyses, and within-condition EEG trial-shift controls.

Bad-channel detection and ICA are recording-wide unsupervised preprocessing steps; trial-level prediction features themselves are temporally constrained and do not use post-window samples. The pipeline should therefore be interpreted as leakage-controlled offline analysis rather than a fully online adaptive decoder.

Local default paths in the script reflect the original run environment and should be overridden in `userCfg` for a new installation.

## Citation

If you use this code, please cite the associated manuscript and the original dataset/article:

- Hassall CD, Harley J, Kolling N, Hunt LT. Temporal scaling of human scalp-recorded potentials. *PNAS*. 2022;119(43):e2214638119. https://doi.org/10.1073/pnas.2214638119
- Hassall CD, Harley J, Kolling N, Hunt LT. Temporal scaling of human scalp-recorded potentials: production and perception data. OpenNeuro ds004200 v1.0.0. https://doi.org/10.18112/openneuro.ds004200.v1.0.0

## Integrity

The final manuscript reports results from the frozen v6.5.1 pipeline. The code archive is provided for transparent reproduction and auditing of the analysis.
