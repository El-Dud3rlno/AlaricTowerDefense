# Balance Tuning Guide (Rift-Style)

All primary tuning numbers now live in `src/config/balance.js`.

## Key levers for pushing beyond Rift 100
- `scaling.towerDamageLinearPerRift` and `scaling.towerDamageExpPerRift`
- `scaling.investmentDamagePerUpgrade`
- `scaling.bossHpMultiplier`
- `scaling.bossSlayerPerRift`
- `scaling.bossExposePerStack`

## If bosses still wall runs
1. Raise `bossSlayerPerRift` by +0.01 steps.
2. Lower `bossHpMultiplier` by -0.2 steps.
3. Raise `investmentDamagePerUpgrade` by +0.02 steps.

## If trash becomes too easy
1. Raise `enemyHPBaseGrowth` slightly (e.g. `1.078` -> `1.082`).
2. Raise `nonBossRampPerRift` by +0.01.
3. Increase `enemyCountPerRift` modestly.
