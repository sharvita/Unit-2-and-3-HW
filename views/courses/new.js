<div class="data-form">
  <form class="form-signin" action="<%=`/courses/create`%>" method="POST">
    <h2 class="form-signin-heading">Create a new course:</h2>
    <label for="inputTitle">Title</label>
    <input type="text" name="title" id="inputTitle" class="form-control" placeholder="Title" autofocus>
    <label for="inputDescription">Description</label>
    <input type="text" name="description" id="inputDescription" class="form-control" placeholder="Description">
    <label for="inputMaxStudents">Max Students</label>
    <input type="text" name="maxStudents" id="inputMaxStudents" pattern="\d*" class="form-control" placeholder="Max Students" required>
    <label for="inputCost">Cost</label>
    <input type="text" name="cost" id="inputCost" pattern="\d*" class="form-control" placeholder="Cost" required>
    <br /><button class="btn btn-lg btn-primary btn-block" type="submit">Save</button>
  </form>
</div>