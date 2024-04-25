import gaussian from 'gaussian'
import { GraphPoint } from 'react-native-graph'
import { GraphPathRange } from 'react-native-graph/lib/typescript/CreateGraphPath'

// export interface GraphXRange {
//     min: Date
//     max: Date
// }

// export interface GraphYRange {
//     min: number
//     max: number
// }

// export interface GraphPathRange {
//     x: GraphXRange
//     y: GraphYRange
// }

// export type GraphRange = Partial<GraphPathRange>

function weightedRandom(mean: number, variance: number): number {
  var distribution = gaussian(mean, variance)
  // Take a random sample using inverse transform sampling method.
  return distribution.ppf(Math.random())
}

export function generateRandomGraphData(length: number): GraphPoint[] {
  return Array<number>(length)
    .fill(0)
    .map((_, index) => ({
      date: new Date(
        new Date(2000, 0, 1).getTime() + 1000 * 60 * 60 * 24 * index
      ),
      value: weightedRandom(10, Math.pow(index + 1, 2)),
    }))
}

export function generateSinusGraphData(length: number): GraphPoint[] {
  return Array<number>(length)
    .fill(0)
    .map((_, index) => ({
      date: new Date(index),
      value: Math.sin(index),
    }))
}