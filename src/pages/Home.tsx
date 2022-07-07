import { Button, Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"
import { NavLink } from "react-router-dom"

export function Home() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src="https://www.seekpng.com/png/full/83-835228_fscheck-by-kurt-random-logo-png.png"
          width="400" height="350"
        />
      </div>
      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        The Essentials Store
      </h1>
      <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        Only the Essentials
      </h3>
      <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        href="/store">
        Get Shopping
      </Button>
    </>
  )
}