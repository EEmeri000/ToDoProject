const [items, setItems] = useState([
    {
      id: 1,
      title: "Grab some Pizza",
      completed: true,
    },
    {
      id: 2,
      title: "Do your workout",
      completed: true,
    },
    {
      id: 3,
      title: "Hangout with friends",
      completed: false,
    },
  ]);

  {items.map((task) => (
    <ToDo task={task} />
  ))}