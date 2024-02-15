import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	tr: {
		border: '1px solid #000000',
	},
	th: {
		textAlign: 'left',
	},
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
	const bg = { backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab' };
	return (
		<tr style={bg} className={isHeader ? css(styles.tr) : null}>
			{isHeader ? (
				textSecondCell ? (
					<>
						<th className={css(styles.th)}>{textFirstCell}</th>
						<th className={css(styles.th)}>{textSecondCell}</th>
					</>
				) : (
					<th colSpan={2}>{textFirstCell}</th>
				)
			) : (
				<>
					<td>{textFirstCell}</td>
					<td>{textSecondCell}</td>
				</>
			)}
		</tr>
	);
}

export default CourseListRow;

CourseListRow.defaultProps = {
	isHeader: false,
	textFirstCell: '',
	textSecondCell: '',
};

CourseListRow.propTypes = {
	textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
