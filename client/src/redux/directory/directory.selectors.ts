import { createSelector } from 'reselect'
import { AppState } from '../root-reducer'

const selectDirectory = (state: AppState) => state.directory
export const selectSections = createSelector([selectDirectory], (state) => state.sections)
