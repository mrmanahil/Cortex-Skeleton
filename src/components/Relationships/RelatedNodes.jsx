import React from 'react'
import ListDepthIcon from '../../assets/img/ListDepth.svg'
import RelatedNodesArrowIcon from '../../assets/img/RelatedNodesArrow.svg'
import  ConfigureAttributeIcon from '../../assets/img/ConfigureAttribute.svg'

function RelatedNodes() {
    return (
        <div className='relatedNode-comp'>
            <p className='heading-relNodes'>Related Nodes</p>
            <ul>
                <li>
                    <p className='listDepthIcon'>
                        <img src={ListDepthIcon} />
                        <sup>3</sup>
                    </p>
                    <p className='relNode-listText'>
                        <span>
                            Perimeter Monitoring
                            <button className='btnIcon'>
                                <img src={RelatedNodesArrowIcon} />
                            </button>
                        </span>
                    </p>
                </li>

                <li>
                    <p className='listDepthIcon'>
                        <img src={ListDepthIcon} />
                        <sup>5</sup>
                    </p>
                    <p className='relNode-listText'>
                        <span>
                            Perimeter Monitoring
                            <button className='btnIcon'>
                                <img src={RelatedNodesArrowIcon} />
                            </button>
                        </span>
                    </p>
                </li>

                <li>
                    <p className='listDepthIcon configAttIcon'>
                        <img src={ConfigureAttributeIcon} />
                    </p>
                </li>

            </ul>
        </div>
    )
}

export default RelatedNodes