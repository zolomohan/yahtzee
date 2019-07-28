import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component {

  calcTotalScore(){
    let totalScore = 0;
    for(let key in this.props.scores){
      if(this.props.scores[key]) totalScore += this.props.scores[key];
    }
    return totalScore;
  }

  render() {
    const { scores, doScore } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow description={ones.description} disabled={this.props.disabled} name="Ones" score={scores.ones} doScore={evt => doScore("ones", ones.evalRoll)} />
              <RuleRow description={twos.description} disabled={this.props.disabled} name="Twos" score={scores.twos} doScore={evt => doScore("twos", twos.evalRoll)} />
              <RuleRow description={threes.description} disabled={this.props.disabled} name="Threes" score={scores.threes} doScore={evt => doScore("threes", threes.evalRoll)} />
              <RuleRow description={fours.description} disabled={this.props.disabled} name="Fours" score={scores.fours} doScore={evt => doScore("fours", fours.evalRoll)} />
              <RuleRow description={fives.description} disabled={this.props.disabled} name="Fives" score={scores.fives} doScore={evt => doScore("fives", fives.evalRoll)} />
              <RuleRow description={sixes.description} disabled={this.props.disabled} name="Sixes" score={scores.sixes} doScore={evt => doScore("sixes", sixes.evalRoll)} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow description={threeOfKind.description} disabled={this.props.disabled} name="Three of Kind" score={scores.threeOfKind} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} />
              <RuleRow description={fourOfKind.description} disabled={this.props.disabled} name="Four of Kind" score={scores.fourOfKind} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} />
              <RuleRow description={fullHouse.description} disabled={this.props.disabled} name="Full House" score={scores.fullHouse} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} />
              <RuleRow description={smallStraight.description} disabled={this.props.disabled} name="Small Straight" score={scores.smallStraight} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} />
              <RuleRow description={largeStraight.description} disabled={this.props.disabled} name="Large Straight" score={scores.largeStraight} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} />
              <RuleRow description={yahtzee.description} disabled={this.props.disabled} name="Yahtzee" score={scores.yahtzee} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} />
              <RuleRow description={chance.description} disabled={this.props.disabled} name="Chance" score={scores.chance} doScore={evt => doScore("chance", chance.evalRoll)} />
            </tbody>
          </table>
        </section>
        <h2>Total Score: {this.calcTotalScore()}</h2>
      </div>
    )
  }
}

export default ScoreTable;