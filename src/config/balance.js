window.GAME_BALANCE = {
  frame: {
    light: { baseHP: 92, baseDmg: 10.5, baseRof: 13, baseRange: 130, baseThreat: 1.0 },
    heavy: { baseHP: 190, baseDmg: 8.4, baseRof: 16, baseRange: 125, baseThreat: 1.35 }
  },
  affix: {
    powerMult: 1.42,
    swiftMult: 0.76,
    preciseMult: 1.32,
    resilientMult: 1.45,
    chain: { range: 130, pct: 0.72 },
    splash: { radius: 52, pct: 0.58 },
    burn: { ticks: 40, dps: 2.2 },
    slow: { ticks: 68, mult: 0.50 },
    poison: { ticks: 110, dps: 1.3, bossMult: 2.0 },
    sanctuary: { pulse: 220, healPct: 0.09, dmgBuff: 1.35, buffDur: 200 },
    crit: { chance: 0.16, mult: 1.9 },
    guardian: { threatMult: 5.2, tauntRadius: 155, tauntEvery: 165, dmgMult: 0.66, dmgTakenMult: 0.66 }
  },
  scaling: {
    enemyHPBaseGrowth: 1.078,
    enemySpeedPerRift: 0.014,
    enemyDamagePerRift: 0.075,
    enemyCountBase: 7,
    enemyCountPerRift: 1.85,
    spawnGapStart: 660,
    spawnGapDecay: 0.963,
    spawnGapMin: 215,

    towerDamageLinearPerRift: 0.12,
    towerDamageExpPerRift: 1.01,
    towerHpLinearPerRift: 0.085,
    towerHpExpPerRift: 1.005,
    towerRangePerRift: 0.019,

    bossHpBase: 980,
    bossHpMultiplier: 4.3,
    bossBaseSpeed: 0.88,
    trashHpBase: 125,
    trashBaseSpeed: 0.92,

    nonBossRampPerRift: 0.10,
    earlyHpStart: 0.88,
    earlyHpEndRift: 7,

    bossSlayerPerRift: 0.115,
    bossExposePerStack: 0.082,
    bossExposeMaxStacks: 35,

    upgradeCostBase: 30,
    upgradeCostPerRift: 7,
    upgradeCostPerAffix: 14,

    upgradeDmgPct: 0.22,
    upgradeRofPct: 0.14,
    upgradeRangePct: 0.16,
    upgradeHpPct: 0.26,
    upgradeDmgRiftScale: 0.024,
    upgradeHpRiftScale: 0.017,
    upgradeRangeRiftScale: 0.011,
    upgradeRofRiftScale: 0.017,

    investmentDamagePerUpgrade: 0.24
  }
};
