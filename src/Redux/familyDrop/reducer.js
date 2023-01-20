import { AddRoom, AddAdult, Addchild, Reducechild, ReduceRoom, Reduceadult } from "./actionType";

const intialState = {
    Room: 1,
    Adult: 2,
    Child: 0
}


const reducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case AddRoom: {
            return { ...state, Room: state.Room + payload }
        }

        case ReduceRoom: {
            return { ...state, Room: state.Room - payload }
        }

        case AddAdult: {
            return { ...state, Adult: state.Adult + payload }
        }

        case Reduceadult: {
            return { ...state, Adult: state.Adult - payload }
        }

        case Addchild: {
            return { ...state, Child: state.Child + payload }
        }

        case Reducechild: {
            return { ...state, Child: state.Child - payload }
        }

        default: {
            return state
        }
    }
}


export { reducer }