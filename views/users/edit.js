<div class="data-form">
  <form class="form-signin" method="POST" action="<%=`/users/${user._id}/update?_method=PUT`%>">
    <h2 class="form-signin-heading">Edit user:</h2>
    <label for="inputFirstName">First Name</label>
    <input type="text" name="first" id="inputFirstName" class="form-control" value="<%= user.name.first %>" placeholder="First" autofocus>
    <label for="inputLastName">Last Name</label>
    <input type="text" name="last" id="inputLastName" class="form-control" value="<%= user.name.last %>" placeholder="Last">
    <label for="inputPassword">Password</label>
    <input type="password" name="password" id="inputPassword" class="form-control" value="<%= user.password %>" placeholder="Password" required>
    <label for="inputEmail">Email address</label>
    <input type="email" name="email" id="inputEmail" class="form-control" value="<%= user.email %>" placeholder="Email address" required>
    <label for="inputZipCode">Zip Code</label>
    <input type="text" name="zipCode" id="inputZipCode" pattern="[0-9]{5}" class="form-control" value="<%= user.zipCode %>" placeholder="Zip Code" required>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Save</button>
  </form>
</div>