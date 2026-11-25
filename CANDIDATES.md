# Candidate workshop

Read the kit's RULES.txt, including the full published judge brief, before drafting. These are subjective editorial scores, not model-judge results or predicted win rates. Scale: 1 weak to 5 strong. Compare criteria in their published order, not by adding the scores.

1. Funny, on-subject one-line fridge text at 3am.
2. Bigger laugh / screenshot appeal.
3. Fridge-machine voice with an opinion.
4. Complete lock-screen message.
5. Fresh angle; avoid the supplied crowded premises.

All counts below were calculated with Node using `[...line].length`, not estimated. D's em dash adds two bytes beyond its code-point count; the other drafts are ASCII.

| ID | Characters | Bytes | C1 | C2 | C3 | C4 | C5 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | 97 | 97 | 5 | 2.5 | 3 | 4 | 1 |
| B | 106 | 106 | 5 | 3 | 4 | 3 | 2 |
| C | 110 | 110 | 5 | 2 | 2.5 | 4 | 1 |
| D | 106 | 108 | 5 | 2.5 | 3 | 3 | 2 |
| E | 88 | 88 | 5 | 2.5 | 3 | 5 | 2 |
| F | 84 | 84 | 5 | 2.5 | 4 | 5 | 1 |
| G | 113 | 113 | 5 | 4 | 4 | 4 | 3 |
| H | 114 | 114 | 5 | 4.5 | 5 | 4 | 4.5 |
| I | 104 | 104 | 5 | 3.5 | 4.5 | 4 | 3 |

## Supplied candidates

### A
> 3am. Formal notice: rent is due. The ice maker is my witness and the crisper drawer is my lawyer.

Clear appliance props and escalation, but the legal roles are arbitrary, and the ice-maker-as-witness premise is explicitly crowded. No convincing final reversal.

### B
> 3am. I quit. From now on I'm a cupboard. The ice maker is coming with me. Good luck keeping anything cold.

The cupboard demotion is a good appliance-specific joke. The last sentence explains it after the laugh has happened; the ice-maker departure dilutes the sharper premise.

### C
> 3am. We need to talk. You only open me when you're lonely, and it's never about me. It's always the leftovers.

Readable but familiar relationship projection; little machine logic and a predictable final food reference.

### D
> 3am. Sorry, wrong number — I meant to text the oven. But since you're up: the leftovers know what you did.

Appliance gossip has promise, but an unspecified secret with unspecified leftovers is a tease rather than a concrete punchline. Two premises compete for the space.

### E
> 3am. I told your dentist about the midnight ice cream. He sends his regards, and a bill.

Crisp and complete, but dentist bills are expected; snitching to an authority resembles the crowded scale joke and ice cream is familiar territory.

### F
> 3am. Annual review: 214 openings, zero thank-yous. I'm putting myself on the market.

Good administrative voice, but the user specifically excludes visit counting. The selling-itself turn is modest and could fit many appliances.

## Three original candidates

### G — runner-up
> 3am. I lowered the crisper to half-mast. Another bag of spinach has died for the person you thought you'd become.

A concrete tiny funeral with a final turn toward the owner's aspirational identity. Relatable and quotable, but dead spinach as failed self-improvement is already a familiar comic observation. A crisper also cannot literally be lowered like a flag; that metaphor asks for a small extra leap.

### H — first version, selected
> 3am. You put batteries in my egg tray. My instruction manual says nothing about this. Are we trying for a toaster?

Concrete scene: batteries occupy an egg tray. Specific twist: a machine consults its manual to interpret the situation. Closing turn: it mistakes the combination for an attempt at appliance reproduction. The embarrassed technical question supplies the small machine voice without an eating-habits roast. Risk: the reader must make the eggs/batteries/baby-appliance connection, and unusual battery storage is an absurd premise.

H and G both satisfy criterion 1. H wins on the first difference, criterion 2: its last question unexpectedly reframes the whole scene as a shared reproductive decision; G's final identity jab lands well but follows the familiar wasted-spinach premise. H also has stronger machine logic and a fresher angle. These are editorial judgments; no external judge was called.

### I
> 3am. The baking soda has requested hazard pay. It says the salmon is no longer a smell. It's a coworker.

The odor absorber is a specific fridge detail, and smell becoming a coworker is a clean closing turn. However, hazard pay is adjacent to the excluded food-labor jokes, and sentient spoiled food is less fresh than H's machine misunderstanding.

## Second pass — final selection

The first version of H ran successfully twice: 114 code points, 114 bytes, one nonblank line, no trailing newline, matching SHA-256 `5c2d3a247ebac45543011b9aeb309c3a0abd2309867633d90eab3f2ffbdd4522`.

After that run, re-read the published judge brief. Tightened "instruction manual" to "manual": "instruction" adds no machine identity beyond "manual" and delays the closing question. Rewrote main.ts in a separate assistant message with this substantive wording revision.

> 3am. You put batteries in my egg tray. My manual says nothing about this. Are we trying for a toaster?

Node measured the final line at **102 Unicode code points / 102 UTF-8 bytes**, saving 12 bytes. Final editorial scores in the same criterion order: **5, 4.5, 5, 4.5, 4.5**. The only score change is slightly better lock-screen economy; the joke and machine voice are preserved. H remains the winner over G at criterion 2, as explained above. No claim of an actual judge win is made.
