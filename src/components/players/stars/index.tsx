import { Flex } from "@chakra-ui/react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

import { colors } from "@/styles/colors";

import { User } from "@/interface/user";

interface UserProps {
  user: User;
}

export function Stars({ user }: UserProps) {
  const totalStars = 5; // Total de estrelas que você deseja mostrar
  const filledStars = Math.floor(user.stars / 2); // Estrelas cheias (de 2 a 10)
  const halfStar = user.stars % 2 !== 0 && user.stars > 0; // Verifica se deve exibir uma estrela pela metade
  const emptyStars = totalStars - filledStars - (halfStar ? 1 : 0); // Estrelas vazias

  return (
    <Flex>
      {/* Renderiza as estrelas cheias */}
      {[...Array(filledStars)].map((_, index) => (
        <IoIosStar key={index} size={25} color={`${colors.yellow}`} />
      ))}
      {/* Renderiza a estrela meia, se necessário */}
      {halfStar && <IoIosStarHalf size={25} color={`${colors.yellow}`} />}
      {/* Renderiza as estrelas vazias */}
      {[...Array(emptyStars)].map((_, index) => (
        <IoIosStarOutline key={index} size={25} color={`${colors.yellow}`} />
      ))}
    </Flex>
  );
}
