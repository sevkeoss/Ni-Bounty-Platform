import { Bounty } from "../../sections/Bounty/Bounties";

export function getBounties(state: { bounties: Bounty[] }): Bounty[] {
  return state.bounties;
}
