const UPDATE_SELECTED = 'UPDATE_SELECTED';

export function updateSelected(selected) {
  return {
    type: UPDATE_SELECTED,
    selected,
  }
}
