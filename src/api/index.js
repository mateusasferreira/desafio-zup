async function getTrails(){
    try {
        const res = await fetch(`https://60e2ee6f9103bd0017b47673.mockapi.io/api/v1/trails/`)
        const data = await res.json()

        return data
    } catch(err) {
        console.log(err)
    }
}

async function getTrailCourses(trailId){
    try {
        const res = await fetch(`https://60e2ee6f9103bd0017b47673.mockapi.io/api/v1/trails/${trailId}/trails-grade/${trailId}/courses/`)
        const trailCourses = await res.json()
        return trailCourses
      } catch(err) {
        console.error(err)
      }
}

export default {
    getTrails,
    getTrailCourses
}