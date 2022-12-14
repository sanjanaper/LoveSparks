import React, { Component } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

class Block extends Component {

  handleAddition = () => {
    this.props.onAddition();
  }

  handleDelete = () => {
    this.props.onDelete();
  }

  render() {
    const { isBlocked, isReported } = this.props;
    const tooltipToBlock = (
      <Tooltip id="not-blocked">A blocked profile will no longer appear in
      your search results.</Tooltip>
    );
    const tooltipBlocked = (
      <Tooltip id="blocked">Blocked! This user no longer appears in
      your search results.</Tooltip>
    );

    if (isReported) {
      return (
        <OverlayTrigger placement="bottom" overlay={tooltipBlocked}>
          <button
            className="fa fa-eye-slash blocked"
            onClick={this.handleDelete}
            disabled
          />
        </OverlayTrigger>
      );
    } else if (isBlocked) {
      return (
        <OverlayTrigger placement="bottom" overlay={tooltipBlocked}>
          <button
            className="fa fa-eye-slash blocked"
            onClick={this.handleDelete}
          />
        </OverlayTrigger>
      );
    }
    return (
      <OverlayTrigger placement="bottom" overlay={tooltipToBlock}>
        <button
          className="fa fa-eye"
          onClick={this.handleAddition}
        />
      </OverlayTrigger>
    );
  }
}

export default Block;
