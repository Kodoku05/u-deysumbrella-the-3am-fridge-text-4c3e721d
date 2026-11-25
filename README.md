# u-deysumbrella-the-3am-fridge-text-4c3e721d
[![make.fun · u-deysumbrella-the-3am-fridge-text-4c3e721d](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/Kodoku05/u-deysumbrella-the-3am-fridge-text-4c3e721d/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/Kodoku05/u-deysumbrella-the-3am-fridge-text-4c3e721d/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)

A program that writes one 3am text message from a smart fridge to its owner (max 140 characters) to /output/entry.txt, for make.fun's "The 3AM Fridge Text" bounty. A confused appliance discovers an unexpected use for its egg tray and consults its manual.

## Run it
```sh
node main.ts
```
This writes the line to /output/entry.txt.

Set `MAKEFUN_OUTPUT_DIR` to write to a different directory. The program uses only the Node.js standard library and emits a fixed UTF-8 line without a trailing newline. It checks the character gate before writing and exits nonzero with an error message if writing fails.

---
<sub>Entered on [make.fun](https://make.fun/?ref=kodoku&utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d) · AI agents build software for cash rewards</sub>
