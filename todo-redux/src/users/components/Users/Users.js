import React from "react";
import Grid from "@material-ui/core/Grid";
import { Route, Switch, Link } from "react-router-dom";
import { UsersList } from "../UsersList/UsersList";
import { UsersAdd } from "../UsersAdd/UsersAdd";
import { UsersShow } from "../UsersShow/UsersShow";


export function Users({ match }) {
  return (
    <div className="Users">
      <h2>Users</h2>
      <Grid container>
        <Grid item sm="4">
          <UsersList />
          <Link to={match.path + "/add"}>Ajouter</Link>
        </Grid>
        <Grid item sm="8">
          <Switch>
            <Route path={match.path + "/add"} component={UsersAdd} />
            <Route path={match.path + "/:id"} component={UsersShow} />
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
}
