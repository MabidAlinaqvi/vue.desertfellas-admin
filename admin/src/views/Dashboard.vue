<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row mt-4">
          <div class="col-lg-12 mb-lg-0 mb-4">
            <div class="card">
              <div class="p-3 pb-0 card-header">
                <div class="d-flex justify-content-between">
                  <h6 class="mb-2">Roles</h6>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <label class="form-control-label">Select Users</label>
                    <v-select :options="['Canada', 'United States']"></v-select>
                  </div>
                  <div class="col-md-12">
                    <label class="form-control-label">Select Roles</label>
                    <v-select :options="['Canada', 'United States']"></v-select>
                  </div>
                  <div class="col-md-12">
                    <label class="form-control-label"
                      >Select Event Categories</label
                    >
                    <v-select :options="['Canada', 'United States']"></v-select>
                  </div>
                  <div class="col-md-12 mt-2">
                    <div class="d-flex">
                      <argon-checkbox checked>
                        <label class="form-check-label" for="flexCheckDefault">
                          Submit for Approval
                        </label>
                      </argon-checkbox>
                    </div>
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table align-items-center">
                  <thead>
                    <th>User</th>
                    <th>Role</th>
                    <th>Event Categories</th>
                    <th>Checkbox</th>
                  </thead>
                  <tbody>
                    <tr></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vSelect from "vue-select";
import ArgonCheckbox from "@/components/ArgonCheckbox.vue";
export default {
  name: "dashboard-default",
  components: {
    vSelect,
    ArgonCheckbox,
  },
  data() {
    return {};
  },
};
</script>
