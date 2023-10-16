const AddExpense = () => {

    function showtext(event) {
        const title = event.target.value;
        console.log(title);
    }

  return (
    <div>
      <form>
        <label>Expense</label>
        <input onChange={showtext} placeholder="Enter title" id="title" type="text"/>
        <label>Amount</label>
        <input onChange={showtext} placeholder="Enter amount" id="amount" type="number"/>
        <label>Date</label>
        <input onChange={showtext} placeholder="Enter date" id="date" type="date"/>
        <button onChange={showtext}>Submit</button>
      </form>
    </div>
  );
};

export default AddExpense;
