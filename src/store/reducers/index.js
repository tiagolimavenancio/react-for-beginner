import { combineReducers } from 'redux'

import course from './course'

export default combineReducers({
    course,
})

/**
 * { 
 *      course: { modules: [], activeModule: {}, activeLesson: {} },
 *      user: { name: '', avatar: '' } 
 * }
 */
 