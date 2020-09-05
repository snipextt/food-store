import axios from "axios"
import moment from "moment"

const generatePostJSON = async elements => {
  const makePostData = new Promise(async resolve => {
    let postData = []
    const JSONData = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    )
    postData = JSONData.data
    postData.forEach((element, index) => {
      element.date = moment().format("MMMM DD, YYYY")
      element.image = index / 2 === 0 ? "office.jpg" : "autumn.jpg"
      element.tags = ["Food", "Recipie"]
      element.link = "#"
      element.author = "saurav singh"
    })
    resolve(postData)
  })
  return makePostData
}

const mergeStyles = (posts, postConfig) => {
  let mergedPosts = posts
  mergedPosts.forEach((element, index) => {
    element.style = postConfig[index]
  })
  console.log(mergedPosts)
  return mergedPosts
}

const capitailize = str =>
  str
    .split(" ")
    .map(v => {
      let phraseToCapitialize = v.split("")
      let firstletter = phraseToCapitialize.shift()
      return `${firstletter.toUpperCase() + phraseToCapitialize.join("")} `
    })
    .join(" ")

export { generatePostJSON, mergeStyles, capitailize }
