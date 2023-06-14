import InstantSearch from "./Instant Search Bar.js";


const searchUser = document.getElementById('#searchUsers');

const InstantSearchUsers = new InstantSearch(searchUser,{
    searchUrl:new URL('/projects/instant-search/search.php',window.location.origin),
    queryParam:"q",
    responseParser:(responseData)=>{
        return responseData.results;
    },
    templateFunction:(result)=>{
        return`
        <div class = 'instant-search__title'>${result.firstName} ${result.lastName}</div>
        <p class ="instant-search__paragraph">${result.occupation}</p> `
    }
});




