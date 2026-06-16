/**
 * src/core/assessment.js
 * 
 * AssessmentEngine encapsulates record grading math and convening order rules.
 * Respects strict NMCI zero-install environment constraints.
 */

export class AssessmentEngine {
  /**
   * Calculates the Record Grade (A/B/C) of an officer based on continuous FITREP history.
   * 
   * Invariants:
   * - Deterministic output.
   * - Does not mutate input array.
   * 
   * @param {Object[]} history Fitrep history records
   * @returns {'A' | 'B' | 'C'}
   */
  static calculateRecordGrade(history) {
    if (!history || history.length === 0) return 'C';
    
    const rvs = history.map(f => f.relativeValue || 0);
    const avgRV = rvs.reduce((a, b) => a + b, 0) / rvs.length;
    const eps = history.filter(f => f.recommendation === 'EP').length;
    const epRatio = eps / history.length;

    if (avgRV > 0.4 && epRatio > 0.25) {
      return 'A';
    } else if (avgRV >= 0 || epRatio > 0.1) {
      return 'B';
    }
    return 'C';
  }

  /**
   * Filter and retrieve the Top 3 competitive FITREPs sorted by Relative Value descending.
   * 
   * @param {Object[]} history Complete Fitrep history
   * @returns {Object[]} Top 3 Fitreps
   */
  static getTop3FITREPs(history) {
    if (!history || history.length === 0) return [];
    
    return [...history]
      .sort((a, b) => {
        if (b.relativeValue !== a.relativeValue) {
          return b.relativeValue - a.relativeValue;
        }
        return new Date(b.fromDate) - new Date(a.fromDate);
      })
      .slice(0, 3);
  }
}
