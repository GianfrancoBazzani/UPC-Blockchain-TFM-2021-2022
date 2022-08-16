const Profile = () => {
  return (
    <div>
      <h2> Profile</h2>

      <table
        class="default"
        border="1"
        width="80%"
        align="center"
        cellspacing="10"
        cellpadding="10"
      >
        <tr>
          <th></th>

          <th colspan="2">Mike</th>

          <th colspan="2">Elisabeth</th>
        </tr>

        <tr>
          <th></th>

          <th>First Proof</th>

          <th>Second Proof</th>

          <th>First Proof</th>

          <th>Second Proof</th>
        </tr>

        <tr>
          <th>Day 1</th>

          <td>25 km</td>

          <td>38 km</td>

          <td>28 km</td>

          <td>37 km</td>
        </tr>

        <tr>
          <th>Day 2</th>

          <td>22 km</td>

          <td>35 km</td>

          <td>30 km</td>

          <td>35 km</td>
        </tr>
      </table>
    </div>
  );
};
export default Profile;
