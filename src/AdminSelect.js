import React from "react";

const AdminSelect = ({ admins, labelText, selected, updateHandler }) => {
  function renderOption(admin) {
    return (
      <option key={admin.id} value={admin.id}>
        {admin.name}
      </option>
    );
  }
  return (
    <label>
      {labelText}:{" "}
      <select
        name="author_id"
        defaultValue={selected}
        onBlur={updateHandler}
        onChange={updateHandler}
      >
        <option>Choose One</option>
        {admins.map(renderOption)}
      </select>
    </label>
  );
};
export default AdminSelect;
