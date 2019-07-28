import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const {score, name, doScore, description  } = this.props,
          completed = score !== undefined,
          disabled = this.props.disabled;
    return (
      <tr 
        className={`RuleRow RuleRow-${(score === undefined) ? 'active' : 'completed'} ${disabled && 'RuleRow-disabled'}`} 
        onClick={completed || disabled ? null : doScore}
      >
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score"> {completed ? score : description}</td>
      </tr>
    )
  }
}

export default RuleRow;