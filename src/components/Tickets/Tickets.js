import data from "./data-tickets";

export const Tickets = () => {

    return (
  <div className="shadow tickets">
    <div className="d-flex justify-content-between align-items-center p-3 pb-1">
      <h5 className="fw-bold">Unresolved tickets</h5>
      <span className="link">View details</span>
    </div>
<div className="d-flex pb-2 group px-3">
<p className="text-black-50">Group: </p>
    <p>Support</p>
</div>
<ul className="list-unstyled left">
{
  data.map(item => (
  <li className='d-flex justify-content-between align-items-center border-bottom py-4 px-3'>
      <span>{item.name}</span>
      <span className="text-black-50">{item.value}</span>
  </li>
  ))
}
</ul>
  </div>
    );
  };
  
