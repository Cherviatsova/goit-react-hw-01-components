import PropTypes from 'prop-types';
import {
    StatisticsSection,
    Title,
    StatList,
    StatItem,
    Label,
    Percentage
} from './Statistics.styled';

export default function Statistics({title, stats}) {
    return (
        <StatisticsSection>
            {title && <Title>{title}</Title>}
            <StatList>
                {stats.map(({ id, label, percentage }) => (
                    <StatItem key={id}>
                        <Label>{label}</Label>
                        <Percentage>{percentage}</Percentage>
                    </StatItem>
                ))}
            </StatList>
        </StatisticsSection>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
}




