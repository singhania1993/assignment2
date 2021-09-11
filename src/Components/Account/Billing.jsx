import { GrDocumentPdf } from 'react-icons/gr'
const Billing = () => {
  return (
    <div className="billing-details">
      <div className="billing">
        <p className="pd-1 text-gray">REFERENCE ID</p>
        <p className="pd-1 fn-bold">4571222f6rthswfg9981fr55</p>
        <p className="pd-1 fn-bold">4571222f6rthswfg9981fr55</p>
        <p className="pd-1 fn-bold">4571222f6rthswfg9981fr55</p>
      </div>
      <div className="billing">
        <div>
          {' '}
          <p className="pd-1 text-gray">DATE</p>
        </div>
        <p className="pd-1 fn-bold">7/12/2020</p>
        <p className="pd-1 fn-bold">7/12/2020</p>
        <p className="pd-1 fn-bold">7/12/2020</p>
      </div>
      <div className="billing">
        <p className="pd-1 text-gray">AMOUNT</p>
        <p className="pd-1 fn-bold">$28</p>
        <p className="pd-1 fn-bold">$28</p>
        <p className="pd-1 fn-bold">$28</p>
      </div>
      <div className="billing">
        <p className="pd-1 text-gray">INVOICE</p>
        <div className="pd-1 fn-bold">
          <GrDocumentPdf />
        </div>
        <div className="pd-1 fn-bold">
          <GrDocumentPdf />
        </div>
        <div className="pd-1 fn-bold">
          <GrDocumentPdf />
        </div>
      </div>
    </div>
  )
}

export default Billing
