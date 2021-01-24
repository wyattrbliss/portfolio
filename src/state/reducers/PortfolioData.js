const initialState = {
    selected: 'home'
}

const PortfolioData = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SELECTED':{
            return {
                selected: action.selected
            }
        }
        default:
            return state
    }
}

export default PortfolioData
