<h1 class="center">Course Data for
  <%= course.title %>
</h1>

<table class="table">
  <tr>
    <th>Title</th>
    <td>
      <%= course.title %>
    </td>
  </tr>
  <tr>
    <th>Description</th>
    <td>
      <%= course.description%>
    </td>
  </tr>
  <tr>
    <th>Max Students</th>
    <td>
      <%= course.maxStudents%>
    </td>
  </tr>
  <tr>
    <th>Cost</th>
    <td>$
      <%= course.cost%>
    </td>
  </tr>
</table>


<div>
  <a class="button" href="<%=`/courses/${course._id}/edit`%>">
    Edit Course Details
  </a>
</div>
<div>
  <a class="button" href="<%= `/courses/${course._id}/delete?_method=DELETE` %>" onclick="return confirm('Are you sure you want to delete this record?')" a>Delete</a>
</div>
<div>
  <a class="button" href="/courses">View all courses</a>
</div>