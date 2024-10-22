// blockchain.cpp : Ce fichier contient la fonction 'main'. L'exécution du programme commence et se termine à cet endroit.
//

#include <iostream>
#include <vector>
#include <ctime>
#include <string>

class Block 
{
public:
    int index;                
    std::string previousHash;
    std::string hash;
    std::string data;
    long timestamp;

    // Constructeur du bloc
    Block(int idx, const std::string& prevHash, const std::string& blkData)
        : index(idx), previousHash(prevHash), data(blkData), timestamp(std::time(nullptr))
    {
        hash = calculateHash();
    }

    // Fonction simplifiée pour calculer un "hash"
    std::string calculateHash() const 
    {
        return std::to_string(index) + previousHash + std::to_string(timestamp) + data;
    }
};
class Blockchain {
public:
    std::vector<Block> chain;

    Blockchain() 
    {
        // Ajouter le bloc génésis ,le premier bloc de la chaîne)
        chain.push_back(createGenesisBlock()); 
    }

    // Fonction pour créer le bloc génésis
    Block createGenesisBlock() 
    {
        return Block(0, "0", "Genesis Block");
    }

    // Fonction pour obtenir le dernier bloc de la chaîne
    Block getLatestBlock() const {
        return chain.back();
    }

    
    void addBlock(const std::string& data) 
    {
        Block newBlock(chain.size(), getLatestBlock().hash, data);
        chain.push_back(newBlock);
    }

    void printBlockchain() const 
    {
        for (const auto& block : chain) 
        {
            std::cout << "Block " << block.index << ":\n";
            std::cout << "  Previous Hash: " << block.previousHash << "\n";
            std::cout << "  Current Hash:  " << block.hash << "\n";
            std::cout << "  Data:          " << block.data << "\n";
            std::cout << "  Timestamp:     " << block.timestamp << "\n";
            std::cout << std::endl;
        }
    }
};

int main() {
    Blockchain myBlockchain;

    // Ajouter quelques blocs avec des données
    myBlockchain.addBlock("Transaction A -> B: 50 coins");
    myBlockchain.addBlock("Transaction C -> D: 25 coins");

    // Afficher la blockchain
    myBlockchain.printBlockchain();

    return 0;
}
