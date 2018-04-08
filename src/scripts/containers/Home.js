import React, { PureComponent } from "react"
import { Link } from "react-router"

const list = [
  {
    key: "product",
    text: "Product",
    list: [
      { id: "1", title: "Food" },
      { id: "2", title: "Ice-cream" },
      { id: "3", title: "Fruit" },
      { id: "10", title: "Cake" },
      { id: "4", title: "Food" },
      { id: "5", title: "Ice-cream" },
      { id: "6", title: "Fruit" },
      { id: "7", title: "Cake" },
      { id: "1", title: "Food" },
      { id: "2", title: "Ice-cream" },
      { id: "3", title: "Fruit" },
      { id: "10", title: "Cake" },
      { id: "4", title: "Food" },
      { id: "5", title: "Ice-cream" },
      { id: "6", title: "Fruit" },
      { id: "7", title: "Cake" }
    ]
  },
  {
    key: "survey",
    text: "Survey",
    list: [
      { id: "1", title: "User-survey" },
      { id: "2", title: "User-survey event 2" }
    ]
  }
]

class Home extends PureComponent {
  render() {
    return (
      <div id="home" className="containter">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 border-right">
            <div className="menu">
              <h2>{list[0].text}</h2>
              <div className="menu-list">
                {list[0].list.map(item => (
                  <Link className="menu-item" to={`/products/${item.id}`}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="menu">
              <h2>{list[1].text}</h2>
              <div className="menu-list">
                {list[1].list.map(item => (
                  <Link
                    key={item.id}
                    className="menu-item"
                    to={`/products/${item.id}`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
