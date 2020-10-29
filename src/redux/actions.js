export function loadData(data) {
  return {
    type: 'LOAD_DATA',
    payload: data,
  };
}

export function setLoading(data) {
  return {
    type: 'SET_LOADING',
    payload: data,
  };
}

export function setLocation(data) {
  return {
    type: 'SET_LOCATION',
    payload: data,
  };
}
