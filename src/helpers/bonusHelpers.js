import { addVectors } from './vectorHelpers';
import { consts } from './consts';
import { resetBonusValues } from '../store/';
import { mine, bullet, missile } from '../assets/svg';

export const updateBonusValues = (bonusValues) => {
    bonusValues.position = addVectors(
        bonusValues.position,
        bonusValues.speed
    );

    if (bonusValues.position.y > consts.WINDOW_HEIGHT - consts.PLAYER_RADIUS * 3) {
        bonusValues = resetBonusValues();
    }

    return bonusValues;
};

export const bonusIconsList = {
    bullet: bullet,
    missile: missile,
    mine: mine
}
