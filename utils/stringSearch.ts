const stringSearch = (
  reference:string,
  search:string,
) => reference.toUpperCase().includes(search.toUpperCase())

export default stringSearch;