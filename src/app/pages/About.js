import React from 'react';
import { Button, Paper } from '@material-ui/core';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Paper>
          in About
          <Button color="secondary" variant="contained" size="large">
            BLOP
          </Button>
        </Paper>
      </div>
    );
  }
}

export default Home;
