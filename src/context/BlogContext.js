import createDataContext from "./createDataContext";



const blogReducer = (state, action) => {
    switch(action.type){
        case 'add_post':
            return [...state, 
                {
                    id: Math.floor(Math.random() * 99999), 
                    title: action.payload.title,
                    content: action.payload.content
                }
        ];
        case 'edit_post':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id
                ? action.payload
                : blogPost;
            });
        case 'delete_post':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({type: 'add_post', payload: { title, content }});
        if(callback){
            callback();
        }        
    }
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_post', payload: id })
    };
};

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({ type: 'edit_post', payload: {id: id, title: title, content: content} });
        if(callback){
            callback();
        }
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    [{ title: 'Test Post', content: 'Test Content', id: 1 }]
);