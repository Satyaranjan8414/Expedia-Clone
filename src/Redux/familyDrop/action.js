import { AddRoom, AddAdult, Addchild, Reducechild, ReduceRoom, Reduceadult } from "./actionType";

export const addRoom = (payload) => {
    return { type: AddRoom, payload }
}

export const addAdult = (payload) => {
    return { type: AddAdult, payload }

}
export const addChild = (payload) => {
    return { type: Addchild, payload }
}


export const reduceRoom = (payload) => {
    return { type: ReduceRoom, payload }
}

export const reduceAdult = (payload) => {
    return { type: Reduceadult, payload }
}

export const reduceChild = (payload) => {
    return { type: Reducechild, payload }
}


