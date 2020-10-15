import Link from 'next/link'
import {useRouter} from 'next/router'
import {getCountryCode, getTotal, urlFormatTxt} from '../../../utils/common/helpers'

function Countries(props) {
  const router = useRouter()
  const country = router.query.countries

  function setCountries() {
    return props.data.lists.map((list, i) => {
      return (
        <Link key={i}
          href='/continents/[countries]/[slug]'
          as={`/continents/${urlFormatTxt(country)}/${urlFormatTxt(list.name)}`}>
          <a>
            <div className="country-item">
              <div className="country-item-wrapper">
                <div className="content-center country-img-wrapper">
                  <img src={getCountryCode(list.name)} alt=""/>
                </div>
                <div className="content-center country-name">
                  <h2 className='text-2 font-1'>{list.name}</h2>
                  <div className='content-center country-stations'>
                    <span className='total-station text-2 font-7'>Stations</span>
                    <span className='text-2 totals font-4'>{list.stationcount}</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
      )
    })
  }

  return (
    <div className="country-wrapper">
      <div className='content-center menu-header text-3'>
        <span className='font-2'>{props.data.name}</span>
        <span>
          <i className='font-2 totalStations'>
            {getTotal(props.data.lists)} Stations</i>
        </span>
      </div>
      <div className="country-list-wrapper">
        {setCountries()}
      </div>
    </div>
  )
}

export default Countries
