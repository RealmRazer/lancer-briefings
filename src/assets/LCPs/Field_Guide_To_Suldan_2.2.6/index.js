"use strict"
import a from "./actions.json"
import c from "./core_bonuses.json"
import f from "./frames.json"
import m from "./manufacturers.json"
import mo from "./mods.json"
import p from "./pilot_gear.json"
import s from "./systems.json"
import sk from "./skills.json"
import w from "./weapons.json"
import t from "./talents.json"
import { manufacturers } from "@massif/lancer-data"

const data = {
  actions: a,
  core_bonuses: c,
  frames: f,
  manufacturers: m,
  mods: mo,
  pilot_gear: p,
  systems: s,
  skills: sk,
  weapons: w,
  talents: t,
}

export default data;