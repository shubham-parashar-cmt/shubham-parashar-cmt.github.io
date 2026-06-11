# Cleanup decision: Notes on functional RG

## Verdict

Keep as a **technical working note**, not as a front-page research item.

This note is useful because it contains a compact reconstruction of two related but distinct topics:

1. textbook/standard fermionic functional RG with a cutoff, self-energy, vertex flow, and Katanin substitution;
2. spin functional RG for an anisotropic Heisenberg model, including deformation of longitudinal/transverse couplings, hybrid functionals, spontaneous symmetry breaking, and the vertex hierarchy.

It should not be advertised prominently on the homepage because it is background/research-training material rather than a current publication direction.

## Public/private recommendation

- Public website: acceptable under `Notes`, if labeled clearly as a working technical note.
- Homepage: do not feature it.
- Projects page: do not link it as a current project unless you later revive the fRG/spin-splitting work.
- Manuscript use: only after a line-by-line convention audit.

## Main edits made

- Removed duplicate preamble clutter.
- Split the note into a clean conceptual structure.
- Separated fermionic fRG from spin fRG.
- Added warning boxes for conventions/signs/cutoffs.
- Preserved the original figures.
- Converted the note into a GitHub Pages-ready HTML page using MathJax.
- Added a cleaned LaTeX source file for private editing.

## Still needs physics audit

Before using the derivations in a paper, check:

1. signs in the definition of the interaction and regulator;
2. whether `J_Λ = J - R_Λ` or `J_Λ = R_Λ` is being used consistently;
3. normalization of `\int_K` and factors of `βN`;
4. whether transverse indices `+,-` are conjugated consistently;
5. whether the Katanin replacement is being used as `\dot G -> \partial_Λ G` or only inside the two-particle flow;
6. whether the infinite-range limit is really a controlled benchmark for the quoted susceptibility scaling.
