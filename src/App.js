import './App.css';
import test from "./assets/file/example_data.json"
import { Col, Row, Image } from 'react-bootstrap';
import './style/navLeft.css'
import "./style/navbar.css"
import './style/header.css'
import "./style/formData.css"
import { BsCardList } from 'react-icons/bs';
import { BiCalendar } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import logoWeb from "./assets/images/logo.svg"


function App() {
  const arrayChunk = (arr, n) => {
    const array = arr.slice();
    const chunks = [];
    while (array.length) chunks.push(array.splice(0, n));
    return chunks;
  };

  return (
    <div>
      <div className='bg-header'>
        5
      </div>

      <div style={{ height: "95vh", display: "flex", background: "#f5f6f8" }}>
        <div className="bg-navl ">
          <div>
            <Image src={logoWeb} className="styleLogo" />
          </div>
          <div className="bsCardList" >
            <BsCardList size={35} />
          </div>
          <div>
            Place
          </div>
        </div>

        <div className="nav-b" >
          <div >
            <div >
              <h3>Place List</h3>
            </div>
            <div className="autocomplete" >
              <div >
                <select className='styleSelect'>
                  <option>
                    restaurant
                  </option>
                  <option>
                    cafe
                  </option>
                  <option>
                    bakery
                  </option>
                </select>
              </div>
              <div className='between'>
                |
              </div>
              <div>
                <input placeholder='Search name...' className='styleInput' />
              </div>
            </div>
          </div>

          <div>
            {
              test.map((data) => {
                return (
                  <div className="formData" >
                    <Row style={{ marginBottom: "1%" }}>
                      <Col sm={3}>
                        <img src={data.profile_image_url} className="styleProfileImage" />
                      </Col>
                      <Col sm={9}>
                        <Row>
                          {data.name}
                        </Row>
                        <Row>
                          <Col className='styleTimeService'>
                            <BiCalendar />เวลาเปิดร้าน
                          </Col>
                          <Col className='styleRating'>
                            <AiFillStar />{data.rating}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <img src={data.images} className="styleImage" />
                    </Row>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
