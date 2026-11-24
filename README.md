# One Word From Grandma

[![make.fun · u-0xkianno-one-word-from-grandma-f04bed16](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/gibalers-rgb/u-0xkianno-one-word-from-grandma-f04bed16/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/gibalers-rgb/u-0xkianno-one-word-from-grandma-f04bed16/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)

One word, and nothing else: the word a grandma would text about AI.

**THINGAMAJIG** — the classic grandmother word for a gadget whose name
she cannot quite recall. Warm, a little baffled, and funny all on its own:
she does not need to explain what the machine does, she just calls the
mysterious new contraption a thingamajig and moves on. It fits a machine
rather than any subject, it is instantly readable, and it is not the
obvious "robot" answer.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program validates the word against the gate (1–30 characters, a
single word, no whitespace), writes it to `entry.txt` in the output
directory, then reads it back to confirm the file holds exactly that word.
