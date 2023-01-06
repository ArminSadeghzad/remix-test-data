export const Page = ({ users }) => {
  const user = users.props.initialUsers;
  console.log(user, "user here");
  return (
    <div className="container">
      <div>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4"></header>
      </div>

      <div className="card-body">
        <h5 className="care-title">
          {user.gender}
        </h5>
        <p className="card-text">some quick example of the cards.</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {/* const check = second?.props?.todos; */}

        {user?.length ? ( 
          <>
            {user?.map((userx, index) => (
              <div className="card" key={index}>
                <img
                  width="100"
                  height="100"
                  src={"/extrovert-event.jpg"}
                  alt="Loading.."
                />
                <div className="card-body">
                  <h5 className="care-title">{userx.gender}</h5>
                <b>
                  Name : {userx.name.title} {userx.name.first } { userx.name.last}
                </b>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>No Data</p>
        )}

        {/* {users?.map((user, idx) => (
          <User key={idx} user={user} />
        ))} */}
      </div>
    </div>
  );
};
